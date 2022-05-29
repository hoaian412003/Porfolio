import { atom } from 'recoil';

const activeState = atom({
    key: 'active',
    default: ''
})

export { activeState }; 
