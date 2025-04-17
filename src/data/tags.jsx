import * as Icons from "../components/icons/index"

export const TAG_TYPES= {
    language: "Lenguajes",
    framework: "Frameworks",
    tool: "Herramientas",
    general: "Conocimientos generales",
    other: "Otros"
}
const TAGS = {
    python: {
        name: "Python",
        icon: <Icons.PythonIcon />,
        type: TAG_TYPES.language
    },
    fastapi: {
        name: "FastApi",
        icon: <Icons.FastApiIcon />,
        type: TAG_TYPES.framework
    },
    csharp: {
        name: "C Sharp",
        icon: <Icons.CSharpIcon />,
        type: TAG_TYPES.language
    },
    net: {
        name: ".Net",
        icon: <Icons.NETIcon />,
        type: TAG_TYPES.framework
    },
    jwt: {
        name: "JWT",
        icon: <Icons.JWTIcon />,
        type: TAG_TYPES.tech
    },
    sqlite: {
        name: "SQLite",
        icon: <Icons.SQLiteIcon />,
        type: TAG_TYPES.framework
    },
    git: {
        name: "Git",
        icon: <Icons.GitIcon />,
        type: TAG_TYPES.tool
    },
    github: {
        name: "GitHub",
        icon: <Icons.GitHubIcon />,
        type: TAG_TYPES.tool
    },
    html: {
        name: "HTML5",
        icon: <Icons.HTML5Icons />,
        type: TAG_TYPES.general
    },
    css: {
        name: "CSS3",
        icon: <Icons.CSS3Icon />,
        type: TAG_TYPES.general
    },
    javaScript: {
        name: "JavaScript",
        icon: <Icons.JavaScriptIcon />,
        type: TAG_TYPES.general
    },
    react: {
        name: "React",
        icon: <Icons.ReactIcon />,
        type: TAG_TYPES.general
    },
    mySql: {
        name: "MySQL",
        icon: <Icons.MySQLIcon />,
        type: TAG_TYPES.framework
    },
    visualStudio: {
        name: "Visual Studio",
        icon: <Icons.VisualStudioIcon />,
        type: TAG_TYPES.tool
    },
    visualStudioCode: {
        name: "Visual Studio Code",
        icon: <Icons.VisualStudioCodeIcon />,
        type: TAG_TYPES.tool
    }
};

export default TAGS