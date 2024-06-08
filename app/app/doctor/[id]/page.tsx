function Doctor({ params }: Readonly<{ params: { id: string } }>) {
  return <h1>DOCTOR {params.id}</h1>;
}

export default Doctor;
