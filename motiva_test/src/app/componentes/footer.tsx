"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white font-montserrat mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
        
        
        <div>
          <div className="flex items-center">
            <Image src="/images/simboloccr.png" alt="CCR" width={28} height={28} />
            <h3 className="ml-3 font-semibold text-base sm:text-lg">Fale com a ViaMobilidade</h3>
          </div>
          <p className="text-sm mt-4 text-gray-300 leading-relaxed">
            Para informações sobre as linhas, achados e perdidos e atendimento
            nas estações, ligue para a Central de Atendimento.
          </p>
          <div className="flex items-center mt-4 text-[#FFFFFF] font-semibold">
            <Image
              src="/images/telefoneVermelho.png"
              alt="Telefone"
              width={22}
              height={22}
              className="mr-2"
            />
            <a href="sms:0800-770-7106" className="hover:underline text-sm sm:text-base">
              0800 - 770 - 7106
            </a>
          </div>
          <p className="text-xs mt-1 text-gray-400">
            Seg-Sex: 06h30 às 22h | Sáb: 08h às 18h
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Acesse</h4>
          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
            <li>
              <Link href="/" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Rotas</Link>
            </li>
            <li>
              <Link href="/status" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Status</Link>
            </li>
            <li>
              <Link href="/beneficios" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Benefícios</Link>
            </li>
            <li>
              <Link href="/suporte" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Suporte</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Motiva</h4>
          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
            <li>
              <a href="https://www.viamobilidade.com.br/nos/empresas" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Sobre Nós</a>
            </li>
            <li>
              <a href="https://viamobilidade.com.br/politica-de-privacidade" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Política de Privacidade</a>
            </li>
            <li>
              <a href="https://www.viamobilidade.com.br/termos-de-uso" className="hover:text-white relative font-semibold  
               after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 
               hover:after:w-full">Termos de uso</a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="bg-[#1F1F1F] text-center py-4 text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} ViaMobilidade. Todos os direitos reservados.
      </div>
    </footer>
  );
}
