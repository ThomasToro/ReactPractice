import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Inicio/Inicio.tsx"),
    route("imc","routes/Imc/Imc.tsx"),
    route("ppt","routes/Ppt/Ppt.tsx"),


    
] satisfies RouteConfig;
