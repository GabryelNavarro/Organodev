import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'  // corrigido, só useState

const Formulario = (props) => {

  
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTimes] = useState('')

    const Salvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time

        })
        setNome('')
        setCargo('')
        setImagem('')
        setTimes('')
        
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={Salvar}>
                <h2>Preencha os dados para criar o card do Colaborador</h2>

                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                obrigatorio={true} 
                label="Time"
                itens={props.times}
                valor= {time}
                aoAlterado={valor => setTimes(valor)}
                
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario
