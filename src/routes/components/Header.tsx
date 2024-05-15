import "./components.module.css";

interface HeaderProps {
  title: string;
  sex?: string;
}

export default function Header({ title, sex }: HeaderProps) {
  return (
    <div style={{textAlign: "center"}}>
      <h1>{sex === "getlemen" ? "Bienvenido " : sex === "lady" ? "Bienvenida" : ""}</h1>
      <h1>{title}</h1>
    </div>
  );
}
