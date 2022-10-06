import { useForm } from 'react-hook-form';
import { Button } from 'components';
import axios from 'axios';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const send = async data => {
        try {
            const result = await axios.post('http://localhost:3001', data);
            console.log('result: ', result);
            console.log('data: ', data);
        } catch (error) {
            console.log('error: ', error);
        }
    };

    return (
        <form className={s.form}>
            <label className={s.label}>
                <input
                    className={s.input}
                    placeholder="Як до Вас звертатись?"
                    {...register('name', {
                        required: "Це поле є обов'язковим",
                    })}
                />
                <p className={s.error}>{errors?.name ? `* ${errors.name.message}` : <>&nbsp;</>}</p>
            </label>
            <label className={s.label}>
                <input
                    className={s.input}
                    placeholder="Номер телефону"
                    title="Залиште свій номер і ми вам зетелефонуємо"
                    {...register('phone', {
                        required: "Це поле є обов'язковим",
                        pattern: {
                            value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
                            message: 'Введіть будь ласка номер телефону',
                        },
                    })}
                />
                <p className={s.error}>{errors?.phone ? `* ${errors.phone.message}` : <>&nbsp;</>}</p>
            </label>
            <label className={s.label}>
                <input
                    className={s.input}
                    placeholder="Поштова адреса"
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
                <textarea
                    className={s.input__text}
                    type="textarea"
                    placeholder="Якщо бажаєте, залиште нам своє повідомлення"
                    {...register('text')}
                />
            </label>
            <Button text="Відправити" onClick={handleSubmit(send)} />
        </form>
    );
};

export default ContactForm;
