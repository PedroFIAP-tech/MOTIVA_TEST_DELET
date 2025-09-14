import BotaoDenuncia from "../componentes/botaoDenuncia";

export default function Suporte() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-4 bg-gray-100">
      <div className="w-full max-w-2xl flex flex-col gap-3">
        <BotaoDenuncia />

        <div className="p-4 rounded-lg shadow-md">
          <h4 className="font-bold text-lg">SMS Denúncia</h4>
          <p className="text-sm text-gray-700">
            Envie um SMS para{" "}
            <a href="sms:11912776323" className="text-[#5E22F3] font-semibold">
              11 91277-6323
            </a>
          </p>
        </div>

        <div className="p-4 rounded-lg shadow-md">
          <h4 className="font-bold text-lg">Fale com a ViaMobilidade</h4>
          <p className="text-sm text-gray-700">
            Para informações sobre as linhas, achados e perdidos e atendimento nas estações, ligue para a Central de Atendimento.
          </p>
          <p className="text-xl font-bold text-[#5E22F3] mt-2">
            <a href="tel:0800-770-7106">0800 - 770 - 7106</a>
          </p>
          <p className="text-xs text-gray-500">Segunda a sexta das 06h30 às 22h00, sábado das 08h00 às 18h00</p>
          <p>
            <a href="#" className="text-[#5E22F3] font-semibold">
              <strong>Ouvidoria:</strong> entre em contato direto pelo nosso site
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
