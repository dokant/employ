import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronRight, CheckCircle, ShieldCheck, FileText, HardHat, Loader2 } from 'lucide-react';
import { HERO_BG, TRUST_ICON_1, TRUST_ICON_2, PROFILE_IMG, SERVICE_LABOR, SERVICE_SAFETY, SERVICE_COMPENSATION, SERVICE_FOREIGNER } from './images/assets';

// --- Layout Components ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '행정사 소개', path: '/profile' },
    { name: '업무 분야', path: '/services' },
    { name: '문의하기', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-secondary flex-shrink-0" />
              <span>기업 노동·산업안전 전문</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-primary border-b-2 border-secondary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-primary hover:bg-blue-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   isActive(link.path) ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-secondary text-white px-3 py-3 rounded-md text-base font-medium"
            >
              상담 신청하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-secondary flex-shrink-0" />
              기업 노동·산업안전 전문<br className="hidden md:block" /> 행정사사무소
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              기업의 안전과 근로자의 권리, <br/>
              28년 경력의 전문가가 지킵니다.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/profile" className="hover:text-secondary">행정사 소개</Link></li>
              <li><Link to="/services" className="hover:text-secondary">업무 분야</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">오시는 길</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>010-7128-8192</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <span>서울특별시 강남구 강남대로 320, 1202호</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 기업 노동·산업안전 전문 행정사사무소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// --- Page Components ---

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Office Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-white text-sm font-semibold mb-4">
              28년 경력의 노동·산재 전문가
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              기업의 안전과 근로자의 권리,<br/>
              확실하게 지킵니다.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              노동부·근로복지공단 실무 경험을 바탕으로 한<br/>
              기업 맞춤형 노동·산업안전 솔루션을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-secondary hover:bg-orange-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                무료 상담 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary mb-2">기업 노동·산업안전 전문 행정사사무소</h2>
              <div className="h-1 w-20 bg-secondary mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-600">
                복잡한 노동 행정, 28년 공직 노하우로 풀어드립니다.
              </p>
            </div>
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                   <img src={TRUST_ICON_1} alt="Badge" className="w-10 h-10 object-contain" />
                </div>
                <span className="font-semibold text-sm">28년 공직 경력</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <img src={TRUST_ICON_2} alt="Gov" className="w-10 h-10 object-contain" />
                </div>
                <span className="font-semibold text-sm">노동부·공단 출신</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Preview */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">전문 업무 분야</h2>
            <p className="text-gray-600">기업 운영에 필수적인 핵심 법률 서비스를 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: '기업 노동 자문', icon: <FileText className="w-8 h-8 text-secondary" />, desc: '근로계약서, 취업규칙, 임금 설계 및 노무 관리.' },
               { title: '산업재해 보상', icon: <ShieldCheck className="w-8 h-8 text-secondary" />, desc: '업무상 재해 인정, 심사 청구 및 권리 구제.' },
               { title: '산업안전 컨설팅', icon: <HardHat className="w-8 h-8 text-secondary" />, desc: '중대재해처벌법 대응, 위험성 평가, 안전 체계.' },
               { title: '외국인 근로자', icon: <MapPin className="w-8 h-8 text-secondary" />, desc: 'E-7, E-9 비자 및 고용 허가 행정 대행.' },
             ].map((service, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 group">
                 <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                 <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                 <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                 <Link to="/services" className="text-primary font-semibold text-sm flex items-center hover:underline">
                   자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                 </Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  왜 노동부, 공단 출신 행정사여야 할까요?
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  이론에만 치우친 자문은 현장에서 통하지 않습니다. 
                  수천 건의 실무 경험을 통해 행정기관의 판단 기준을 정확히 알고 있습니다. 
                  문제가 발생한 후가 아니라, 발생하기 전 예방하는 것이 최상의 솔루션입니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary w-6 h-6 mr-3" />
                    <span className="font-medium">실무에 강한 현장 중심 솔루션</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary w-6 h-6 mr-3" />
                    <span className="font-medium">사전 리스크 차단을 위한 예방 컨설팅</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary w-6 h-6 mr-3" />
                    <span className="font-medium">기업 규모에 맞춘 합리적인 자문 비용</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="text-center py-8">
                   <h3 className="text-2xl font-bold mb-2">무료 초기 진단</h3>
                   <p className="text-gray-300 mb-6">귀사의 현재 노동/안전 리스크를 진단해드립니다.</p>
                   <Link to="/contact" className="inline-block bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition">
                     상담 신청하기
                   </Link>
                </div>
              </div>
           </div>
        </div>
      </section>
      
      {/* Contact Banner */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            복잡한 노동 법률 문제, 지금 바로 전문가와 상의하세요.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="text-primary font-bold hover:underline flex items-center">
               상담 문의 바로가기 <ChevronRight className="w-5 h-5 ml-1" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 w-full">
              <img src={PROFILE_IMG} alt="대표 행정사" className="w-full rounded-lg shadow-lg object-cover aspect-[3/4]" />
              <div className="mt-6 p-6 bg-gray-100 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3">자격 사항</h3>
                <ul className="space-y-2 text-sm text-gray-900 font-medium">
                  <li>• 일반행정사 (행정안전부)</li>
                  <li>• 산업안전관리자 교육 수료</li>
                  <li>• 인사노무관리 전문가 과정 수료</li>
                </ul>
              </div>
            </div>
            <div className="md:w-2/3 w-full">
               <h1 className="text-4xl font-bold text-primary mb-2">대표 행정사</h1>
               <p className="text-secondary font-bold text-lg mb-6">노동부·근로복지공단 28년 경력</p>
               
               <div className="prose prose-lg text-gray-800 mb-10">
                 <p className="leading-relaxed mb-6 font-medium">
                   "안녕하십니까, 대표행정사입니다.<br/>
                   행정기관 대응부터 예방까지, 기업의 든든한 파트너가 되겠습니다."
                 </p>
                 <p className="leading-relaxed">
                   28년간 고용노동부와 근로복지공단 등 공공기관에서 근무하며 쌓은 현장 경험은 
                   저의 가장 큰 자산입니다. 법전 속에 있는 이론이 아니라, 실제 현장에서 
                   어떻게 법이 적용되고 집행되는지를 누구보다 잘 알고 있습니다.
                 </p>
               </div>

               <div className="mb-10">
                 <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">주요 약력</h3>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <span className="font-bold block text-gray-900">현) 기업 노동·산업안전 전문 행정사사무소 대표</span>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <span className="font-bold block text-gray-900">현) CnG교육코칭센터 전문 강사</span>
                       <span className="text-sm text-gray-700 font-medium">기업체 노동법 및 산업안전 강의 출강</span>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <span className="font-bold block text-gray-900">전) 고용노동부 근무</span>
                       <span className="text-sm text-gray-700 font-medium">근로감독, 산업안전 감독 실무</span>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                     <div>
                       <span className="font-bold block text-gray-900">전) 근로복지공단 근무</span>
                       <span className="text-sm text-gray-700 font-medium">산재 보상, 고용 산재 보험 심사 실무</span>
                     </div>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      id: 'labor',
      title: '기업 노동 자문',
      img: SERVICE_LABOR,
      content: [
        '근로계약서, 취업규칙, 노사협의회 규정 작성 및 정비',
        '임금 설계 및 최저임금 위반 여부 검토',
        '해고, 징계 등 인사 처분 관련 법적 대응',
        '부당해고 및 부당노동행위 구제 신청 대리'
      ]
    },
    {
      id: 'safety',
      title: '산업안전 (중대재해)',
      img: SERVICE_SAFETY,
      content: [
        '중대재해처벌법 대응 안전보건관리체계 구축 컨설팅',
        '정기 위험성 평가 실시 및 지도',
        '산업안전보건법 위반 시정 조치 및 대응',
        '안전 교육 및 현장 점검 지원'
      ]
    },
    {
      id: 'compensation',
      title: '산재 보상',
      img: SERVICE_COMPENSATION,
      content: [
        '업무상 재해(부상, 질병) 요양 급여 신청',
        '과로사, 뇌심혈관계 질환, 근골격계 질환 입증',
        '장해 급여, 유족 급여 청구',
        '공단 불승인 처분에 대한 심사 및 재심사 청구'
      ]
    },
    {
      id: 'foreigner',
      title: '외국인 근로자',
      img: SERVICE_FOREIGNER,
      content: [
        'E-7(특정활동), E-9(비전문취업) 비자 관련 행정 업무',
        '외국인 고용 허가 신청 대행 및 인력 관리 자문',
        '체류 자격 변경 및 연장 신청',
        '불법 체류 및 출입국 사범 심사 대응'
      ]
    }
  ];

  return (
    <div className="bg-bgLight min-h-screen pb-20">
      <div className="bg-primary py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">전문 업무 분야</h1>
        <p className="max-w-2xl mx-auto text-gray-300">기업의 지속 가능한 성장을 위해 반드시 필요한 핵심 법률 서비스를 제공합니다.</p>
      </div>
      
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover absolute inset-0" />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="w-10 h-1 bg-secondary inline-block mr-4"></span>
                  {service.title}
                </h2>
                <ul className="space-y-3 mb-8">
                  {service.content.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link to="/contact" className="inline-flex items-center text-white bg-primary hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition">
                    해당 분야 상담 신청 <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    type: '노동',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // [실제 운영 적용 가이드]
    // 문의 내역 수신 이메일 주소: cirrus01@naver.com
    // 텔레그램 봇 API 또는 EmailJS 서비스를 연동하여 아래 로직을 구성합니다.
    const RECIPIENT_EMAIL = "cirrus01@naver.com";

    // TODO: 아래 값을 실제 운영하는 텔레그램 봇 정보로 교체하세요.
    const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; 
    const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE";     

    const message = `
🔔 *[새로운 상담 신청]*
➡ *수신자*: ${RECIPIENT_EMAIL}

🏢 *회사명*: ${formData.companyName}
👤 *담당자*: ${formData.contactName}
📞 *연락처*: ${formData.phone}
📧 *이메일*: ${formData.email}
📑 *분야*: ${formData.type}

📝 *상세 내용*:
${formData.message}
    `;

    console.log(`Sending inquiry to ${RECIPIENT_EMAIL} via configured service...`);

    // 봇 토큰이 설정되어 있다면 전송을 시도합니다.
    if (TELEGRAM_BOT_TOKEN !== "YOUR_BOT_TOKEN_HERE") {
      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        });
      } catch (error) {
        console.error("텔레그램 전송 오류:", error);
      }
    } else {
      console.log("서비스 연동 대기 중 (테스트 모드)");
      console.log("전송 내용:\n", message);
      // UX 테스트를 위한 인위적인 딜레이
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      type: '노동',
      message: ''
    });
    setIsSubmitted(false);
  }

  return (
    <div className="py-20 bg-bgLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-primary mb-4">상담 문의 및 오시는 길</h1>
          <p className="text-gray-600">궁금하신 사항을 남겨주시면 친절하고 신속하게 답변해 드립니다.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md min-h-[500px] flex flex-col justify-center">
            
            {!isSubmitted ? (
              <>
                <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">무료 상담 신청</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
                      <input 
                        type="text" 
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="(주)기업명"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">담당자명</label>
                      <input 
                        type="text" 
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="홍길동"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="010-1234-5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">문의 분야</label>
                    <select 
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="노동">기업 노동 자문</option>
                      <option value="산재">산업재해 보상</option>
                      <option value="안전">산업안전 컨설팅</option>
                      <option value="기타">기타/외국인 등</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">상세 내용</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="문의하실 내용을 간략히 적어주세요."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2 w-5 h-5" />
                        전송 중...
                      </>
                    ) : (
                      "상담 신청하기"
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">상담 신청이 완료되었습니다!</h3>
                <p className="text-gray-600 mb-8 max-w-xs">
                  남겨주신 내용을 확인 후,<br/>
                  담당자가 신속하게 연락드리겠습니다.
                </p>
                <button 
                  onClick={resetForm}
                  className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md"
                >
                  추가 문의하기
                </button>
              </div>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">사무소 정보</h2>
              <ul className="space-y-6">
                 <li className="flex items-start">
                   <div className="bg-blue-50 p-3 rounded-full mr-4">
                     <Phone className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <span className="block text-sm text-gray-500 font-medium">전화번호</span>
                     <span className="text-lg font-bold text-gray-800">010-7128-8192</span>
                   </div>
                 </li>
                 <li className="flex items-start">
                   <div className="bg-blue-50 p-3 rounded-full mr-4">
                     <MapPin className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <span className="block text-sm text-gray-500 font-medium">주소</span>
                     <span className="text-lg font-bold text-gray-800 mb-1">서울특별시 강남구 강남대로 320</span>
                     <span className="text-gray-600">1202호 (황화빌딩)</span>
                   </div>
                 </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-800 mb-2">운영 시간</h3>
                <p className="text-gray-600 text-sm">평일 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
              </div>
            </div>
            
            {/* Map - Iframe for specific location */}
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-md h-64 relative group">
              <iframe 
                src="https://maps.google.com/maps?q=서울특별시%20강남구%20강남대로%20320&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App Component ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;