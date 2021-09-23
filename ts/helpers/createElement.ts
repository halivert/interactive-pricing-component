export default function createElement(tagName, attrs = {}, ...children) {
	if (typeof tagName === "function") return tagName({ ...attrs, children });

	if (tagName === "fragment") return children;
	const elem = Object.assign(document.createElement(tagName), attrs);
	for (const child of children) {
		if (Array.isArray(child)) elem.append(...child);
		else elem.append(child);
	}
	return elem;
}
