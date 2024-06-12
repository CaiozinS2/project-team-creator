import React, { useRef, useState, useEffect } from 'react';
import './Campo.css';

const Campo = (props) => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState('Escolha uma imagem');

    useEffect(() => {
        if (props.tipo === 'file' && props.valor === null) {
            setFileName('Escolha uma imagem');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }, [props.valor, props.tipo]);

    const handleChange = (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            setFileName(arquivo.name);
            props.aoAlterado(arquivo);
        } else {
            setFileName('Escolha uma imagem');
        }
    };

    const handleButtonClick = () => {
        inputRef.current.click();
    };

    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        const valor = evento.target.value;
        if (props.tipo === 'color' && !/^#[0-9A-F]{6}$/i.test(valor)) {
            return;
        }
        props.aoAlterado(valor);
    };

    return (
        <div className="campo">
            <label>{props.label}</label>
            {props.tipo === 'file' ? (
                <div className="file-upload">
                    <input
                        type="file"
                        ref={inputRef}
                        onChange={handleChange}
                        required={props.obrigatorio}
                        accept=".png, .jpg, .jpeg, .webp, .gif, .svg"
                        className="file-input"
                    />
                    <button type="button" onClick={handleButtonClick} className="upload-button">
                        Selecionar Imagem
                    </button>
                    <span className="file-name">{fileName}</span>
                </div>
            ) : (
                <input
                    type={props.tipo}
                    value={props.valor}
                    onChange={aoDigitado}
                    required={props.obrigatorio}
                    placeholder={props.tipo === 'color' ? undefined : placeholderModificada}
                />
            )}
        </div>
    );
};

export default Campo;