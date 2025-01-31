import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '../../assets';
import LoginModal from '../modalLogin';
import LogoutModal from '../modalLogout';  // Importa o novo modal de logout

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false); // Estado para controlar o modal de logout
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const isOnDocumentsPage = pathname === "/mydocuments";

  return (
    <header className="w-full h-[64px] flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-8">
        <a href="/">
          <Image src={Logo} alt="Logo do ResumeAI" width={170} />
        </a>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-700 font-medium hover:text-[#4b52d1]">Ferramentas</a>
          <a href="#pricing" className="text-gray-700 font-medium hover:text-[#4b52d1]">Preços</a>
          <a href="#help" className="text-gray-700 font-medium hover:text-[#4b52d1]">Ajuda</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <button onClick={() => router.push(isOnDocumentsPage ? "/chatbot" : "/mydocuments")}>
              {isOnDocumentsPage ? "ChatBot" : "Meus Documentos"}
            </button>
            <a href="#my-profile" className="px-4 py-2 rounded-[24px] text-white font-medium bg-gradient-to-r from-[#004BD4] via-[#5331CF] via-[#7726CD] to-[#A219CA] hover:opacity-90">
              Meu Perfil
            </a>
            <button onClick={() => setShowLogoutModal(true)} className="text-gray-700 font-medium hover:text-[#a219ca]">
              Sair
            </button>
            {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}  {/* Exibe o modal de logout */}
          </>
        ) : (
          <>
            <button onClick={() => setShowLoginModal(true)} className="px-4 py-2 rounded-[24px] text-white font-medium bg-gradient-to-r from-[#004BD4] via-[#5331CF] via-[#7726CD] to-[#A219CA] hover:opacity-90">
              Login
            </button>
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
