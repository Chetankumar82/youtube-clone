export const API_KEY = 'AIzaSyALGyyJBFzH9wcp6kC41g8rQP8OzlpFxXU';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
}
