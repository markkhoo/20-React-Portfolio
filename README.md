# Mark Khoo's Portfolio

## Description
You found the `README` to my portfolio! This portfolio is made with [React](https://reactjs.org/). The styling of the [waves](https://codepen.io/goodkatz/pen/LYPGxQz?editors=1100/) and [cards](https://codepen.io/hexagoncircle/pen/XWbWKwL?editors=1100) I found on CodePen. If you haven't already seen my portfolio, you can view it [HERE](https://markkhoo.github.io/Portfolio/).

## Technologies Used
* HTML
* CSS
* Javascript
* [Reactjs](https://reactjs.org/)

## Code Snippet
If you were wondering, this is the snippet of code responsible for the name animation. 
```javascript
    // States for Name animation
    const [getName, setName] = useState("");
    const [getTick, setTick] = useState("_");

    // Animate name on load
    useEffect(() => {
        const myName = ["", "M", "Ma", "Mar", "Mark", "Mark ", "Mark K", "Mark Kh", "Mark Kho", "Mark Khoo"];
        let nameTime = 0;

        const interval = setInterval(() => {
            if(nameTime < myName.length){
                setName(myName[nameTime]);
            } else if (nameTime >= myName.length + 5) {
                setTick("");
                clearInterval(interval);
            };
            nameTime += 1;
        }, randInt(75, 200));
    }, []);

    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
```

---

## Contact
For any questions contact GitHub user [markkhoo](https://github.com/markkhoo) or at this email: markkhoo95@gmail.com