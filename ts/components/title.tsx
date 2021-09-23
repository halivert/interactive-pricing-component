import createElement from "../helpers/createElement";

export default function Title({ children, ...props }) {
	return <h1 className="" {...props}>{children}</h1>;
}
