import { useForm } from 'react-hook-form';
import { Button } from 'components';
import sendEmail from 'helpers/sendEmail';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const send = data => {
        sendEmail(data);
        console.log('data: ', data);
    };

    return (
        <form className={s.form}>
            <label className={s.label}>
                <span className={s.label__text}>Ім'я</span>
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
                <span className={s.label__text}>Номер телефону</span>
                <input
                    className={s.input}
                    placeholder="066 000 00 00"
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
                <span className={s.label__text}>Email</span>
                <input
                    className={s.input}
                    placeholder="your@email.com"
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
                    placeholder="Якщо бажаєте, то залиште нам своє повідомлення"
                    {...register('text')}
                />
            </label>
            <Button text="Відправити" onClick={handleSubmit(send)} />
        </form>
    );
};

export default ContactForm;
