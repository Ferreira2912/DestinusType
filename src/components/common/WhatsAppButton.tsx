import Link from 'next/link';
import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://api.whatsapp.com/send?phone=5555996222695&text=Ola.%20Tudo%20bem?%20Atenderemos%20você%20assim%20que%20possível.%0AObrigada%20por%20nós%20contatar&fbclid=PAZXh0bgNhZW0CMTEAAacZD5Dmk9RQ9eWGmsIHwlSeO6fC3qSlGsAsp_3_vJLFmJFblu30hhdquBXPkg_aem_tSwep8Nmndj9KBUGbYvowg" 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image 
        src="/assets/icons/whatsapp-icon-large.svg" 
        alt="WhatsApp" 
        width={60}
        height={60}
      />
    </Link>
  );
}