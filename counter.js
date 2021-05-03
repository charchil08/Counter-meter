const container = document.getElementById('container');
const targets = document.querySelectorAll('.target');

const counter = () => {
    targets.forEach((target) => {

        const updateTarget = () => {
            //To convert strint to number we use +(unary operator)
            const targetValue = +target.getAttribute('data-target');
            const increment = targetValue / 25;
            let currentValue = Number(target.innerHTML);
            

            if (currentValue < targetValue) {
                target.innerHTML = `${Math.round(currentValue + increment)}`;
                setTimeout(updateTarget, 60);
            } else {
                target.innerHTML = `${targetValue}`;
                target.style.color = '#56ff00';
            }
        }

        updateTarget();
    })    
}

container.addEventListener('mouseover',counter);