<template >
    <section class="signUp flex justify-center items-center">
        <form  class='signUp-container'>
            <strong class='signUp__title'>Sign Up</strong>
            <div class='signUp__div'>
              <label htmlFor="email">Email</label>
              <input
                type="email" 
                id="email"
              />
            </div>
            <div class='signUp__div'>
              <label htmlFor="firstName">Name</label>
              <input
                type="text" 
                id="firstName"
              />
            </div>
            <div class='signUp__div'>
              <label htmlFor="lastName">Last Name</label>
              <input
                 
                type="text" 
                id="lastName"
              />
            </div>
            <div class='signUp__div'>
              <label htmlFor="password">Password</label>
              <input
                type="password" 
                id="password"
              />
            </div>
            <div class='signUp__div'>
              <label htmlFor="phone">Phone (9 characters)</label>
              <input
                type="tel" 
                id="phone"
              />
            </div>
            <div class='message__error'>
              phone && The phone length is 8 characters
            </div>
            <button
              class='btn__signup'
            > 
              Sign up
            </button>
            <div class='signUp__options'>
              Already have an account?
              <button 
              >
                Log in
              </button>
            </div>
          </form>

    </section>
</template>

<style>
.login{
    flex: 1;
    height: 100vh;
    background: hsla(0,1%,72%,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/*! styles SignUp */

.signUp{
    flex: 1;
    height: 100vh;
    background: hsla(0,1%,72%,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;   
    margin-top: 74px;
}

.signUp-container{
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #0003;
    padding: 20px;
}

.signUp-container .signUp__div{
    margin-bottom: 20px;
}
.signUp-container .signUp__title{
    margin-bottom: 20px;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.9;
} 


.signUp-container .signUp__div input{
    width: 100%;
    height: 35px;
    padding: 6px 8px;
    margin-top: 5px;
    border-radius: 3px;
    border: 1px solid black;
}

.signUp-container .btn__signup{
    background: #0d47a1;
    color: black;
    width: 100%;
    height: 40px;
    margin-top: 10px;
}

.signUp__options{
    margin-top: 20px;
    font-weight: 500;
    font-size: .8rem;
}

.message__error{
    color: deepskyblue;
    text-align: center;
}

.signUp__options button{
    background: none;
    font-size: inherit;
    margin-left: 4px;
    color: deepskyblue;
}
</style>