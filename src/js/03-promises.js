'use strict'
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);
  await createPromises(delay, step, amount);
});


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      const result = { position, delay };
      shouldResolve ? resolve(result) : reject(result);
    }, delay);
  });
}


async function createPromises(delay, step, amount) {
  for (let i = 0; i < amount; i++) {
    try {
      const { position, delay: currentDelay } = await createPromise(i + 1, delay);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${currentDelay}ms`);
    } catch ({ position, delay: currentDelay }) {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${currentDelay}ms`);
    }
  
    delay += step;
  }
}







