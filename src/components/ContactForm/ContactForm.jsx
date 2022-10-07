import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components';
import axios from 'axios';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const send = async data => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            try {
                await axios.post('http://localhost:3001/api/email/upload', formData);
            } catch (error) {
                console.log('Upload error: ', error);
            }
        }
        try {
            await axios.post('http://localhost:3001/api/email', data);
        } catch (error) {
            console.log('Send email error: ', error);
        }
    };

    const chooseFile = file => {
        setSelectedFile(file);
    };

    return (
        <>
            <form className={s.form}>
                <h3 className={s.form__title}>
                    Залиште свої контакти і ми обов'язково з Вами зв'яжемся найближчим часом
                </h3>
                <label className={s.label}>
                    {/* <span className={s.label__text}>Ім'я</span> */}
                    <input
                        className={s.input}
                        placeholder="Ваше І'мя"
                        title="Як до Вас звертатись?"
                        {...register('name', {
                            required: "Це поле є обов'язковим",
                        })}
                    />
                    <p className={s.error}>{errors?.name ? `* ${errors.name.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    {/* <span className={s.label__text}>Номер телефону</span> */}
                    <input
                        className={s.input}
                        placeholder="Залиште свій номер і ми вам зетелефонуємо"
                        title="Введідть номер телефону у будь якому форматі"
                        {...register('phone', {
                            required: "Це поле є обов'язковим",
                            pattern: {
                                value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
                                message: 'Перевірте будь ласка номер телефону',
                            },
                        })}
                    />
                    <p className={s.error}>{errors?.phone ? `* ${errors.phone.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    {/* <span className={s.label__text}>Поштова скринька</span> */}
                    <input
                        className={s.input}
                        placeholder="Залиште Ваш email"
                        title="Введідть Ваш email за бажанням"
                        {...register('email', {
                            pattern: {
                                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                message: 'Такого email не існує',
                            },
                        })}
                    />
                    <p className={s.error}>{errors?.email ? `* ${errors.email.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    {/* <span className={s.label__text}>Текст повідомлення</span> */}
                    <textarea
                        className={s.input__text}
                        placeholder="Якщо бажаєте, залиште нам своє повідомлення тут"
                        {...register('text')}
                    />
                </label>

                <label className={s.label}>
                    {/* <span className={s.label__text}>Тут можна причіпити Ваш файл</span> */}
                    <input
                        className={s.input}
                        type="file"
                        title="Якщо бажаєте додати файл..."
                        // accept=".jpg, .jpeg, .png"
                        onChange={e => chooseFile(e.target.files[0])}
                    />
                </label>

                <Button text="Відправити" onClick={handleSubmit(send)} />
            </form>
        </>
    );
};

export default ContactForm;
