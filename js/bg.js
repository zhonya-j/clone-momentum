bg_imgs = [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb80XnK%2FbtqCYEUM5lO%2Fs1BrpkiYAKbjCr0jEknFL0%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkOOWF%2FbtqC2tR9xUF%2FR6qwnDzMmMU8jzGlZ645w1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQgmKj%2FbtqC3PmCKs6%2F2iQs7W83QGGoy4O8lMdWdK%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcr7P1x%2FbtqC0LsfsJv%2FaguTNUyxlapFaLAUcCuLb0%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMjN1e%2FbtqC22zZ8yJ%2F9zytwr8jNdxnscNykCv6Y1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFuZBC%2FbtqC2upZMaw%2FY4o7kkKbHiQHgrKWdmIy10%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLzbZY%2FbtqCYFl2doo%2FVNM55mhjD61mYKIn5zTU8k%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FA5hu4%2FbtqC3qgj7dK%2FoSv83EyUiSCPFbG8ts4k01%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9zo1L%2FbtqC3OVyDg7%2FdsyNZta7PbkrwYBKpQ3vWk%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdaFGNQ%2FbtqC0KfJFJc%2FSx8WQWinfqODZcRazntff1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeK2fDr%2FbtqC22fFMQB%2FKZn9KTKrk3IkKa88buXnL1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbn8tEq%2FbtqC1IvhikW%2FFp8RtzXkOLkgAJ4JYVXcUk%2Fimg.jpg",
]

const randomNumber2 = Math.floor(Math.random() * bg_imgs.length);
document.body.background = `${bg_imgs[randomNumber2]}`;
