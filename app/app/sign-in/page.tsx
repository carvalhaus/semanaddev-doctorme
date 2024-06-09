import { Button } from "@/components/button";
import Field from "@/components/form";
import Header from "@/components/header";
import Link from "next/link";

function SignIn() {
  return (
    <>
      <Header href="/" title="Login" iconClassName="w-4 h-4" />
      <div className="py-4">
        <h1 className="font-bold text-xl">Acesse sua conta</h1>
        <p>Olá, informe seus dados para acessar.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Field
          labelProps={{
            children: "Telefone",
          }}
          inputProps={{
            placeholder: "Informe seu numero de telefone",
            type: "text",
            defaultValue: "",
            autoFocus: true,
          }}
        />
        <Field
          labelProps={{
            children: "Senha",
          }}
          inputProps={{
            placeholder: "Insira sua senha",
            type: "password",
            defaultValue: "",
            autoFocus: true,
            className: "mb-1",
          }}
        />
        <Button className="mb-6">Login</Button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex h-6 relative w-full items-center justify-center mb-6">
          <span className="absolute z-10 bg-white px-2 text-sm">ou</span>
          <div className="border-b border-b-gray-100 w-full absolute"></div>
        </div>
        <p>
          Não está cadastrado?{" "}
          <Link href="/sign-up" className="text-[#459487] font-bold underline">
            Crie sua conta
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignIn;
