import React from "react";

const Update = () => {
    return (
        <article>
        <h2>수정</h2>
        <form action="#" method="post" onSubmit={function(e){
            e.preventDefault();
            alert("경고")
            
            
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
                <input type="submit" value={"수정"} ></input> 
            </p>
        </form>
        </article>
    )
}

export default Update;