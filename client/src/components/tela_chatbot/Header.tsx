import React from 'react';
import Image from 'next/image';
import { Logo } from '../../assets';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[64px] flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-8">
        <Image src={Logo} alt="Logo do ResumeAI" width={170} />
        <nav className="space-x-4">
          <a href="#features" className="text-gray-700 font-medium hover:text-[#4b52d1]">Ferramentas</a>
          <a href="#pricing" className="text-gray-700 font-medium hover:text-[#4b52d1]">Preços</a>
          <a href="#help" className="text-gray-700 font-medium hover:text-[#4b52d1]">Ajuda</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#my-documents" className="text-gray-700 font-medium hover:text-[#a219ca]">Meus Documentos</a>
        <a href="#my-profile" className="px-4 py-2 rounded-[24px] text-white font-medium bg-gradient-to-r from-[#004BD4] via-[#5331CF] via-[#7726CD] to-[#A219CA] hover:opacity-90">
          Meu Perfil
        </a>
      </div>
    </header>
  );
};

export default Header;
