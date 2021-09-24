import "../css/main.scss";

import { createApp } from "petite-vue";

interface Price {
	views: string;
	price: number;
}

const prices: Array<Price> = [
	{ views: "10K", price: 8 },
	{ views: "50K", price: 12 },
	{ views: "100K", price: 16 },
	{ views: "500K", price: 24 },
	{ views: "1M", price: 36 },
];

createApp({
	price: 2,
	yearly: false,
	get selectedPrice(): Price {
		return prices[this.price];
	},
	get finalPrice(): string {
		const price: number = this.selectedPrice.price;
		const discount: number = this.yearly ? 0.25 : 0;

		return (price * (1 - discount)).toFixed(2);
	},
}).mount("#app");
