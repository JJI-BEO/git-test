import React from "react";

const Insert = () => {
    return (
        <article>
        <h2>회원 가입</h2>
        <form action="#" method="post" onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
                e.target.id.value,
                e.target.pass.value,
                e.target.email.value,
                e.target.nember.value
                
            )   
            
        }}>
            <p>
                <input type="text" name="id" placeholder='아이디'></input>
            </p>
            <p>
                <input type="password" name="pass" placeholder='비밀번호'></input>
            </p>
            <p>
                <input type="text" name="email" placeholder='이메일'></input>
            </p>
            <p>
                <input type="text" name="number" placeholder='전화번호'></input>
            </p>
            <p>
                <input type="submit" value={"가입"} ></input> 
            </p>
        </form>
        </article>
    )
}

export default Insert;