import { Button } from "@/components/button";
import Field from "@/components/form";
import Header from "@/components/header";
import Link from "next/link";

function SignUp() {
  return (
    <>
      <Header href="/" title="Criar conta" iconClassName="w-4 h-4" />
      <div className="py-4">
        <h1 className="font-bold text-xl">Criar uma conta</h1>
        <p>Por favor, informe seu nome e uma senha para criar sua conta.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Field
          labelProps={{
            children: "Seu nome",
          }}
          inputProps={{
            placeholder: "Informe seu nome",
            type: "text",
            defaultValue: "",
            autoFocus: true,
          }}
        />
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
        <Button className="mb-6">Criar conta</Button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p>
          Já está cadastrado?{" "}
          <Link href="/sign-in" className="text-[#459487] font-bold underline">
            Acesse sua conta
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
