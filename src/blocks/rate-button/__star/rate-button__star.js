import './rate-button__star.scss';

const states = { 1: 'star_border', 2: 'star_half', 3: 'star' };
export default function setState($star, stateIndex) {
  $star.text(states[stateIndex]);
}
