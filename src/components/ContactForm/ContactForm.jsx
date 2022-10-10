import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Button } from 'components';
import axios from 'axios';
import sendFile from '../../images/icons/send-file.svg';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const lang = useSelector(state => state.lang);
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

    const handlePick = e => {
        e.preventDefault();
        filePicker.current.click();
    };

    return (
        <>
            <form className={s.form}>
                <h3 className={s.form__title}>{lang.formTitle}</h3>
                <label className={s.label}>
                    <input
                        className={s.input}
                        placeholder={lang.namePlaceholder}
                        title={lang.nameTitle}
                        {...register('name', {
                            required: lang.requiredField,
                        })}
                    />
                    <p className={s.error}>{errors?.name ? `* ${errors.name.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    <input
                        className={s.input}
                        placeholder={lang.phonePlaceholder}
                        title={lang.phoneTitle}
                        {...register('phone', {
                            required: lang.requiredField,
                            pattern: {
                                value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
                                message: lang.phoneErrorMessage,
                            },
                        })}
                    />
                    <p className={s.error}>{errors?.phone ? `* ${errors.phone.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    <input
                        className={s.input}
                        placeholder={lang.emailPlaceholder}
                        title={lang.emailTitle}
                        {...register('email', {
                            pattern: {
                                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                message: lang.emailErrorMessage,
                            },
                        })}
                    />
                    <p className={s.error}>{errors?.email ? `* ${errors.email.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    <textarea className={s.input__text} placeholder={lang.textareaPlaceholder} {...register('text')} />
                </label>

                <div className={s.sendFile}>
                        <div>{selectedFile?.name || 'Завантажити файл'}</div>
                    <img
                        className={s.load_icon}
                        src={sendFile}
                        alt="Load file"
                        onClick={handlePick}
                        title="Load file"
                    />
                    <input
                        className="hidden"
                        type="file"
                        ref={filePicker}
                        // accept=".jpg, .jpeg, .png"
                        onChange={e => chooseFile(e.target.files[0])}
                    />
                    <Button text={lang.formButtonText} onClick={handleSubmit(send)} />
                </div>
            </form>
        </>
    );
};

export default ContactForm;
