import './Login.css';

const Cadastro = () => {
    return (

        <section id='Login'>
            <form className='login-form'>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Digite seu email' required />
                    
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder='Digite sua senha' required />
                    
                    <button type="submit">Enviar</button>

                    <div className='cadastrar'>
                        <a href="">Ir para Cadastro</a>
                    </div>
                </fieldset>

            </form>
                
        </section>
    );
}

export default Cadastro;
