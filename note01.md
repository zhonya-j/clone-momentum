# 모멘텀앱 제작

## FORM tag

html form tag에는 기본적이 기능들이 있다.

필수 입력정보설정, 최대입력 제한, 최소입력 제한 등 유효성 검사를 미리 할 수 있다.

`addEventListener` 에 들어가는 콜백함수에는 기본적으로 첫번째 파라미터가 들어간다.

-> 발생한 이벤트에 대한 내용이 들어가 있다.

- 아래는 이벤트가 발생할때 자동적으로 실행되는 내용을 방지하는 코드 예시이다.
- submit 이벤트에는 자동으로 submit을 하고 리프레쉬되는 기능이 있어서 막을 필요가있음.

```html
<form id="login-form">
    <input 
        required="true"
        maxlength="15"
        minlength="3"
        type="text"
        placeholder="What is your name?"
    />
    <input type="submit" value="Log In" />
</form>
```

```js
function onLoginFormSubmit(event) { //자동으로 들어오는 파라미터는 이벤트로 명명하는게 관습이라고 함. 
    event.preventDefault(); // 기본적으로 실행되는 내용을 막는함수. 
    console.log(envent);
}

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginFormSubmit);

```
