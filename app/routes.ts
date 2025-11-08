import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/data", "routes/data.tsx"),
	route("/login", "routes/login.tsx"),
	route("/protected", "routes/protected.tsx"),
	route("/logout", "routes/logout.tsx")
		,route("/csr", "routes/csr.tsx"),
		route("/ssr", "routes/ssr.tsx")
] satisfies RouteConfig;
