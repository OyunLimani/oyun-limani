import { Game } from "@/types/game";

/**
 * Firebase bağlanana kadar kullanılacak demo oyun verileri.
 * Bu veriler GameDistribution API'sinden gelecek gerçek verilerin yapısını simüle eder.
 */
export const DEMO_GAMES: Game[] = [
  {
    id: "1",
    gameDistId: "subway-surfers-01",
    title: "Subway Surfers",
    slug: "subway-surfers",
    description: "Subway Surfers, sonsuz bir koşu oyunudur. Trenlerden kaçın, bozuk para toplayın ve yeni karakterlerin kilidini açın!",
    articleHTML: `
      <h3>Subway Surfers İncelemesi ve Taktikleri</h3>
      <p>Subway Surfers, web tabanlı oyun dünyasının en ikonik sonsuz koşu oyunlarından biridir. Yıllar geçmesine rağmen popülerliğini koruyan bu efsanevi oyun, hızlı refleksler ve dikkatli bir strateji gerektiriyor. Oyunda amacınız, huysuz bir güvenlik görevlisinden ve onun köpeğinden kaçmak.</p>
      <p>Oyunun grafikleri oldukça renkli ve dinamik. Farklı şehirlerde geçen temalarıyla her seferinde yeni bir görsel deneyim sunuyor. Rayların üzerinde koşarken, trenlerin üstünden atlamalı, engellerin altından kaymalı ve aynı zamanda altınları toplamalısınız. Topladığınız altınlar ile yeni karakterler açabilir veya karakterinizin yeteneklerini geliştirebilirsiniz.</p>
      <h4>Nasıl Daha Yüksek Skor Yapılır?</h4>
      <p>Yüksek skor yapmanın en önemli kuralı, panik yapmamak ve her zaman birkaç adım ilerisini görmektir. Uçan kaykayları (hoverboard) stratejik zamanlarda kullanmak hayat kurtarır. Özellikle oyun çok hızlandığında, hata yapma payınız çok düşüktür; bu anlarda bir kaykay kullanmak size ikinci bir şans verir. Ayrıca, jetpack ve mıknatıs güçlendirmelerini olabildiğince hızlı şekilde maksimum seviyeye çıkarmanız, puanınızı katlayacaktır.</p>
      <p>OyunLimanı üzerinden indirme yapmadan, tamamen ücretsiz olarak Subway Surfers oynayabilirsiniz. Yüksek skorlarınızı arkadaşlarınızla paylaşmayı unutmayın!</p>
    `,
    instructions: "Kaymak için sola/sağa kaydırın. Zıplamak için yukarı, kaymak için aşağı kaydırın.",
    category: { name: "Aksiyon", slug: "aksiyon" },
    thumbnailUrl: "https://img.gamedistribution.com/d7a529f0e0e94e39a5b6cfe4b0942e89-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["koşu", "arcade", "3d"],
    metrics: { playCount: 245000, likes: 12400 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "2",
    gameDistId: "temple-run-02",
    title: "Temple Run 2",
    slug: "temple-run-2",
    description: "Temple Run 2'de tapınaktan kaçışınıza devam edin! Yeni engeller, güçlendirmeler ve ortamlar sizi bekliyor.",
    articleHTML: `
      <h3>Temple Run 2: Sonsuz Maceranın Sırları</h3>
      <p>Temple Run 2, mobil oyun sektörüne yön veren efsanevi koşu oyununun mükemmel bir devamı niteliğindedir. İlk oyunun başarısının ardından, geliştirilmiş grafikler, yeni engeller ve çok daha dinamik bir oynanış ile karşımıza çıkıyor. Terk edilmiş bir tapınakta, peşinizdeki devasa bir canavardan kaçarken ne kadar uzağa gidebileceğinizi test ediyorsunuz.</p>
      <p>Oyunda sadece koşmakla kalmıyor, aynı zamanda iplere tutunarak kayıyor, maden arabalarıyla tehlikeli tünellerden geçiyor ve sarp uçurumların kenarından zıplıyorsunuz. Her saniye artan hız ve zorlaşan engeller, oyunun adrenalini sürekli yüksek tutmasını sağlıyor.</p>
      <h4>Altın Toplamak Neden Önemli?</h4>
      <p>Topladığınız altınlarla, koşucunuzun özelliklerini geliştirebilirsiniz. "Coin Magnet" (Altın Mıknatısı) ve "Boost" (Hızlandırıcı) gibi özellikleri yükseltmek, daha uzun süre hayatta kalmanıza yardımcı olacaktır. Ayrıca yeşil elmasları (gem) biriktirerek öldüğünüzde oyuna kaldığınız yerden devam edebilirsiniz.</p>
      <p>Hemen şimdi OyunLimanı ayrıcalığı ile Temple Run 2'yi indirmeden, tarayıcınız üzerinden yüksek kalitede oynayabilirsiniz. En uzak mesafeye koşmaya hazır mısınız?</p>
    `,
    instructions: "Kaydırarak yön değiştirin, eğilerek engellerden kaçının.",
    category: { name: "Macera", slug: "macera" },
    thumbnailUrl: "https://img.gamedistribution.com/9f47ae0890c14a72ac2c4f3cb1e8e685-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["macera", "koşu", "3d"],
    metrics: { playCount: 189000, likes: 9800 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "3",
    gameDistId: "chess-03",
    title: "Master Chess",
    slug: "master-chess",
    description: "Satranç becerilerinizi geliştirin! Yapay zekaya karşı oynayın veya arkadaşınıza meydan okuyun.",
    articleHTML: `
      <h3>Master Chess ile Zekanızı Sınayın</h3>
      <p>Master Chess, hem yeni başlayanlar hem de usta oyuncular için tasarlanmış, klasik zeka ve strateji oyununun dijital bir yorumudur. Oyunda ister bilgisayarın yapay zekasına karşı antrenman yapabilir, isterseniz de arkadaşlarınızla aynı ekranda karşılıklı oynayabilirsiniz.</p>
      <p>Satranç oynamak, analitik düşünme yeteneğinizi geliştirmenin en iyi yollarından biridir. Her hamle, rakibinizin ne yapabileceğini düşünmenizi ve birkaç adım sonrasını planlamanızı gerektirir. Piyonların nasıl hareket edeceğinden kalelerin konumlandırılmasına kadar her detay büyük önem taşır.</p>
      <h4>Satrançta Başarının Sırrı</h4>
      <p>Eğer satrançta yeniyseniz, her zaman merkeze hakim olmaya çalışın. At ve fillerinizi erkenden oyuna sokun ve şahınızın güvenliğini sağlamak için rok yapmayı unutmayın. Master Chess oyununda hata yaptığınızda geri alma seçeneği olmaması, oyunun gerçekçiliğini artırıyor ve sizi daha dikkatli olmaya zorluyor. OyunLimanı'nda zekanızı konuşturma vakti!</p>
    `,
    instructions: "Taşlarınızı sürükleyerek hareket ettirin. Rakibinizin şahına mat yapın!",
    category: { name: "Strateji", slug: "strateji" },
    thumbnailUrl: "https://img.gamedistribution.com/e1a12aa3abc04adcaf6fef00f56c605b-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["strateji", "satranç", "2-kişilik"],
    metrics: { playCount: 87000, likes: 5400 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "4",
    gameDistId: "bubble-04",
    title: "Bubble Shooter",
    slug: "bubble-shooter",
    description: "Klasik baloncuk patlatma oyunu! Aynı renkteki 3 veya daha fazla baloncuğu eşleştirin.",
    articleHTML: `
      <h3>Bubble Shooter: Klasik Balon Patlatma Macerası</h3>
      <p>Bubble Shooter, yıllardır eskimeyen ve her yaştan oyuncunun keyifle oynadığı klasik bir baloncuk patlatma oyunudur. Oyunun kuralı oldukça basit görünse de, ilerleyen seviyelerde giderek zorlaşan yapısı sayesinde bağımlılık yapıcı bir deneyim sunar.</p>
      <p>Amacınız, yukarıdan aşağıya doğru inen renkli baloncuk kümelerini, fırlatıcınızdaki balonla vurarak patlatmaktır. Patlatma işleminin gerçekleşmesi için fırlattığınız balonla birlikte aynı renkten en az üç balonun yan yana gelmesi gerekir.</p>
      <h4>Taktikler ve İpuçları</h4>
      <p>Balon fırlatırken direkt atış yapmak yerine ekranın kenarlarını kullanarak "sektirme" (bouncing) atışları yapabilirsiniz. Bu sayede doğrudan ulaşılamayan, arkada kalmış baloncuk kümelerini hedef alabilirsiniz. Ayrıca tek seferde büyük bir balon kümesini kopararak düşürdüğünüzde, ekstra yüksek puan kazanırsınız. OyunLimanı'nda stres atmak için birebir!</p>
    `,
    instructions: "Fare ile nişan alın ve tıklayarak baloncukları fırlatın.",
    category: { name: "Bulmaca", slug: "bulmaca" },
    thumbnailUrl: "https://img.gamedistribution.com/5a797ea3c4a54c2fae84ea875d8cfe36-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["bulmaca", "rahatlatıcı", "klasik"],
    metrics: { playCount: 156000, likes: 7200 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "5",
    gameDistId: "drift-hunters-05",
    title: "Drift Hunters",
    slug: "drift-hunters",
    description: "En iyi drift oyunu! Arabanızı özelleştirin ve drift yaparak puan kazanın.",
    articleHTML: `
      <h3>Drift Hunters: Hız ve Adrenalinin Buluşma Noktası</h3>
      <p>Eğer araba yarışlarını ve virajları yanlayarak geçmeyi seviyorsanız, Drift Hunters tam size göre bir oyun. Gerçekçi fizik motoru ve göz alıcı 3D grafikleri sayesinde, tarayıcınız üzerinde konsol kalitesinde bir drift deneyimi yaşayabilirsiniz.</p>
      <p>Oyuna başlarken size sunulan temel bir araçla çeşitli haritalarda drift yapıyorsunuz. Yaptığınız driftlerin süresi ve açısına göre puan kazanıyor, bu puanları paraya çeviriyorsunuz. Kazandığınız paralarla arabanızın motorunu, frenlerini, turbo şarjını yükseltebilir, hatta arabanızın boyasını ve jantlarını tamamen özelleştirebilirsiniz.</p>
      <h4>Gerçek Bir Drift Ustası Olun</h4>
      <p>Drift Hunters'ta yüksek puan almak için komboları kesintisiz bir şekilde devam ettirmeniz gerekir. Virajları alırken fren ve el frenini (space) doğru zamanlamayla kullanmak ustalık ister. Oyunda ayrıca daha yüksek performanslı ikonik araçları (Skyline, Supra gibi modellerden esinlenilmiş arabalar) satın alarak garajınızı genişletebilirsiniz. OyunLimanı ile lastik yakmaya hemen başlayın!</p>
    `,
    instructions: "WASD veya ok tuşlarıyla araba kullanın. Space ile fren yapın.",
    category: { name: "Yarış", slug: "yaris" },
    thumbnailUrl: "https://img.gamedistribution.com/df30460e9d4e4df7af3e384ef1ae78f5-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["yarış", "araba", "drift", "3d"],
    metrics: { playCount: 203000, likes: 11200 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "6",
    gameDistId: "basketball-06",
    title: "Basketball Stars",
    slug: "basketball-stars",
    description: "Online basketbol oyunu! 1v1 maçlarda rakiplerinizi alt edin.",
    articleHTML: `
      <h3>Basketball Stars: Sahaların Yıldızı Sen Ol</h3>
      <p>Basketball Stars, sokak basketbolu kültürünü dijital dünyaya taşıyan eğlenceli ve rekabetçi bir spor oyunudur. Karakterinizin yeteneklerini kullanarak birebir (1v1) veya ikili takımlar halinde potaya basket atıp rakibinizi yenmeye çalışıyorsunuz. Basketbol starlarının karikatürize edilmiş, kocaman kafalı ve eğlenceli halleriyle oynamak oyuna ayrı bir keyif katıyor.</p>
      <p>Oyunda hem hücum hem de savunma yapmanız gerekiyor. Top sizdeyken çalım atarak veya zıplayarak doğru açıdan şut çekmeli, top rakipteyken de onun şut atmasını engellemeli ve topu çalmalısınız. Özel "Super Power" barınız dolduğunda ateşli ve durdurulamaz atışlar yapabilirsiniz.</p>
      <h4>Turnuvaları Kazanmanın Yolu</h4>
      <p>Eğer turnuva modunda oynuyorsanız, zorluk derecesi giderek artacaktır. Bu yüzden defans yapmayı öğrenmek en az hücum kadar önemlidir. Zıplama zamanlamasını iyi ayarladığınızda rakiplerinizin tüm atışlarını bloklayabilirsiniz. İster bilgisayara karşı, isterseniz aynı bilgisayarda arkadaşınıza karşı bu eğlenceli mücadeleye OyunLimanı'nda hemen katılın!</p>
    `,
    instructions: "Fare ile nişan alın ve atış yapın. WASD ile hareket edin.",
    category: { name: "Spor", slug: "spor" },
    thumbnailUrl: "https://img.gamedistribution.com/42b3a36cb1e14dbd9c22c3d48d2e27f9-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["spor", "basketbol", "multiplayer"],
    metrics: { playCount: 134000, likes: 6800 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "7",
    gameDistId: "slither-07",
    title: "Slither.io",
    slug: "slither-io",
    description: "Yılanınızı büyütün ve diğer oyuncuları alt edin! Klasik .io oyunu deneyimi.",
    articleHTML: `
      <h3>Slither.io: Efsanevi Yılan Oyunu Macerası</h3>
      <p>İnternet dünyasının en popüler ".io" oyunlarından biri olan Slither.io, klasik Nokia yılan oyununun çok oyunculu (multiplayer) ve son derece rekabetçi bir modern versiyonudur. Oyuna minik bir yılan (veya solucan) olarak başlarsınız. Amacınız, haritaya dağılmış olan parlak küreleri yiyerek büyümek ve diğer oyuncuları tuzağa düşürmektir.</p>
      <p>Diğer yılan oyunlarından farklı olarak, Slither.io'da kendi vücudunuza çarpabilirsiniz, bu sizi öldürmez. Ancak kafanız başka bir yılanın gövdesine değerse parçalanır ve oyunu kaybedersiniz. Sizin parçalandığınız yerde çıkan devasa parlak küreleri ise diğer yılanlar anında yer.</p>
      <h4>Nasıl Birinci Olunur?</h4>
      <p>Oyunun en heyecanlı kısmı, "hızlanma" (boost) özelliğidir. Fareye basılı tutarak yılanınızı hızlandırabilir, böylece büyük bir yılanın önüne aniden geçerek onu kendinize çarptırabilirsiniz. Uzun bir yılan olduğunuzda, daha küçük oyuncuların etrafını sarıp çember içine almak, rakiplerinizi yutmanın en etkili yoludur. OyunLimanı'nda arenanın en büyük yılanı olmaya hazır mısınız?</p>
    `,
    instructions: "Fare ile yön verin, tıklayarak hızlanın.",
    category: { name: "IO Oyunları", slug: "io-oyunlari" },
    thumbnailUrl: "https://img.gamedistribution.com/3dd6b35eb3054417974ed0e744aaa069-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["io", "multiplayer", "yılan"],
    metrics: { playCount: 312000, likes: 15600 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "8",
    gameDistId: "coloring-08",
    title: "Happy Color",
    slug: "happy-color",
    description: "Sayılarla boyama oyunu! Rahatlatıcı ve eğlenceli boyama deneyimi.",
    articleHTML: `
      <h3>Happy Color: Sayılarla Rahatlatıcı Boyama Sanatı</h3>
      <p>Günlük hayatın stresinden uzaklaşmak ve zihninizi dinlendirmek istiyorsanız, Happy Color tam da aradığınız sakinliği sunuyor. Bu oyun, karmaşık çizimleri belirli numaralara atanmış renklerle boyadığınız dijital bir yetişkin boyama kitabıdır. İster manzara fotoğrafları, ister mandala desenleri olsun, zengin bir resim galerisi sizi bekliyor.</p>
      <p>Oyunu oynamak son derece kolaydır: Ekranın alt kısmında numaralandırılmış renk paletleri bulunur. Bir rengi seçtiğinizde, resim üzerinde boyanması gereken alanlar belirginleşir. Sadece doğru numarayı bulup tıklamanız yeterlidir.</p>
      <h4>Renklerin Terapötik Etkisi</h4>
      <p>Boyama yapmak, odaklanmayı artırır ve meditasyon benzeri bir etki yaratır. Happy Color, yüzlerce farklı ve detaylı tablo ile size adeta bir sanatçı hissi verir. Tamamladığınız her tablo, renklerin canlandığı harika bir sanat eserine dönüşür. OyunLimanı'nın rahatlatıcı kategorisindeki en sevilen bu oyunla iç huzurunuzu bulun.</p>
    `,
    instructions: "Renkleri seçin ve numaralı alanlara tıklayarak boyayın.",
    category: { name: "Boyama", slug: "boyama" },
    thumbnailUrl: "https://img.gamedistribution.com/37a5e95fd83c4e2ba68cb4f0d85c2582-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["boyama", "rahatlatıcı", "sanat"],
    metrics: { playCount: 95000, likes: 4300 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "9",
    gameDistId: "fireboy-09",
    title: "Fireboy and Watergirl",
    slug: "fireboy-and-watergirl",
    description: "İki kişilik macera oyunu! Fireboy ve Watergirl olarak bulmacaları çözün.",
    articleHTML: `
      <h3>Ateş ve Su: Takım Çalışmasının Zirvesi</h3>
      <p>Tarayıcı oyunları tarihinin tartışmasız en ikonik iki kişilik bulmaca oyunu olan Ateş ve Su (Fireboy and Watergirl), takım çalışmasının ve zekanın sınırlarını zorluyor. İki karakterden biri ateş, diğeri sudur. Bir arkadaşınız veya kardeşinizle aynı klavyeyi paylaşarak gizemli tapınaklardaki bulmacaları çözmeye çalışırsınız.</p>
      <p>Oyunun temel kuralı zıtlıklar üzerine kuruludur: Ateş Çocuk lav havuzlarından rahatça geçebilir ama suya girerse söner. Su Kız ise su birikintilerinden rahatça geçebilir ama lava değerse buharlaşır. İkisinin de uzak durması gereken yer ise yeşil zehirli bataklıklardır.</p>
      <h4>Birlikten Kuvvet Doğar</h4>
      <p>Bölümleri tamamlamak için her iki karakterin de çıkış kapısına ulaşması gerekir. Bu yolda birbirinize kapıları açmak için düğmelere basmalı, asansörleri hareket ettirmeli ve ışık huzmelerini aynalarla yansıtmalısınız. Birlikte hareket etmeden seviyeyi geçmek imkansızdır. OyunLimanı sayesinde Ateş ve Su efsanesini donmadan ve reklamsız oynayabilirsiniz!</p>
    `,
    instructions: "WASD ile Watergirl'ü, ok tuşlarıyla Fireboy'u kontrol edin.",
    category: { name: "2 Kişilik", slug: "2-kisilik" },
    thumbnailUrl: "https://img.gamedistribution.com/c4bb9bf20b8f47848fbb57d34eaab555-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["2-kişilik", "macera", "bulmaca"],
    metrics: { playCount: 278000, likes: 14200 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "10",
    gameDistId: "fashion-10",
    title: "Fashion Battle",
    slug: "fashion-battle",
    description: "Moda yarışmasına katılın! En güzel kıyafetleri seçin ve yarışmayı kazanın.",
    articleHTML: `
      <h3>Fashion Battle: Podyumların Hakimi Ol</h3>
      <p>İçinizdeki modacıyı ortaya çıkarmak ve tarzınızı milyonlara göstermek ister misiniz? Fashion Battle, sadece bir giydirme oyunu değil, aynı zamanda rekabetçi bir moda şovudur. Size verilen belirli bir tema (örneğin; balo gecesi, kış modası, plaj partisi) doğrultusunda modelinizi en uygun şekilde hazırlamanız gerekir.</p>
      <p>Yarışmada podyuma çıkmadan önce saç stilinden ayakkabıya, elbiseden aksesuarlara kadar geniş bir gardıroptan seçim yaparsınız. Zaman kısıtlaması, oyunu daha heyecanlı bir hale getirir; çünkü en uyumlu kombini en hızlı şekilde bulmalısınız.</p>
      <h4>Jüriyi Etkilemenin Yolları</h4>
      <p>Kombininiz bittikten sonra podyuma çıkar ve rakibinizle yan yana jürinin oylarını beklersiniz. Jüriden yüksek puan almak için temaya tamamen sadık kalmalı ve renk uyumuna dikkat etmelisiniz. Kazandığınız her yarışma size yeni elbiselerin ve aksesuarların kilidini açar. OyunLimanı'nda moda rüzgarları estirmeye başlayın!</p>
    `,
    instructions: "Kıyafetleri sürükleyerek giydirin. Aksesuarlar ekleyin.",
    category: { name: "Kız Oyunları", slug: "kiz-oyunlari" },
    thumbnailUrl: "https://img.gamedistribution.com/e0d5ee7f1ad3439eb3a3b22e87032147-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["kız", "moda", "giydirme"],
    metrics: { playCount: 167000, likes: 8900 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "11",
    gameDistId: "block-puzzle-11",
    title: "Block Puzzle",
    slug: "block-puzzle",
    description: "Tetris benzeri blok bulmaca oyunu! Blokları yerleştirin ve satırları temizleyin.",
    articleHTML: `
      <h3>Block Puzzle: Zeka Dolu Blok Eşleştirme Eğlencesi</h3>
      <p>Block Puzzle, efsanevi Tetris oyununun farklı bir perspektifle, daha rahatlatıcı ama bir o kadar da zihin açıcı bir yorumudur. Oyunda ekranın altında size verilen farklı şekillerdeki blok parçalarını, 8x8'lik veya 10x10'luk kare tahta üzerine sürükleyerek yerleştirmeniz istenir.</p>
      <p>Amacınız, blokları yatay veya dikey tam bir çizgi haline getirmektir. Tamamlanan her satır veya sütun tahtadan silinir ve size puan kazandırır. Ancak dikkatli olmalısınız; ekranın altından gelen blokları yerleştirecek boş alanınız kalmazsa oyun sona erer.</p>
      <h4>Strateji ve Planlama</h4>
      <p>Block Puzzle oyununda acele etmenize gerek yoktur, süre sınırı bulunmaz. Bu yüzden her hamleyi detaylıca düşünebilirsiniz. Tahtada büyük ve düzensiz boşluklar bırakmak yerine, blokları her zaman düzenli ve kompakt şekilde dizmeye özen gösterin. Büyük parçalar (özellikle büyük kare ve uzun çubuklar) için daima önceden yer ayarlamak hayat kurtarır. OyunLimanı'nda rekorunuzu kırmak için şimdi denemeye başlayın.</p>
    `,
    instructions: "Blokları sürükleyerek tahta üzerine yerleştirin.",
    category: { name: "Bulmaca", slug: "bulmaca" },
    thumbnailUrl: "https://img.gamedistribution.com/1c5cd7e26f304bd6bd28dd29e7e2f911-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["bulmaca", "blok", "tetris"],
    metrics: { playCount: 142000, likes: 6100 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "12",
    gameDistId: "moto-12",
    title: "Moto X3M",
    slug: "moto-x3m",
    description: "Motosiklet engel parkuru oyunu! Tehlikeli pistlerde hız yapın ve akrobasi yapın.",
    articleHTML: `
      <h3>Moto X3M: Tehlikeli Engellerle Dolu Motokros Heyecanı</h3>
      <p>Moto X3M, ekstrem sporları ve motor akrobasisini sevenler için mükemmel bir 2D motosiklet yarış oyunudur. Oyunda amacınız, zorlu engellerle, patlayıcı varillerle ve uçurumlarla dolu parkurları en kısa sürede bitirmektir.</p>
      <p>Parkurlardaki engeller sadece zıplamaktan ibaret değil. Dönen testereler, sarkaç gibi sallanan gürzler ve çivili tuzaklardan kaçarken bir yandan da motosikletinizin dengesini sağlamak zorundasınız. Fizik motoru çok hassastır; yanlış açıyla yere inerseniz motorunuz patlar ve en son geçtiğiniz kontrol noktasına (checkpoint) geri dönersiniz.</p>
      <h4>Zamanla Yarışmak</h4>
      <p>Moto X3M'in asıl sırrı havadayken takla (flip) atmaktır. Attığınız her başarılı ters veya düz takla, bitiş sürenizden yarım saniye eksiltir. Bu da bölümleri 3 yıldız ile bitirmenizi sağlar. Kazandığınız yıldızlarla daha hızlı ve havalı motosikletler satın alabilirsiniz. OyunLimanı'nda kaskınızı takın ve motokros heyecanına ortak olun!</p>
    `,
    instructions: "Yukarı ok ile gaz verin, aşağı ok ile fren yapın. Eğilmek için sol/sağ ok.",
    category: { name: "Yarış", slug: "yaris" },
    thumbnailUrl: "https://img.gamedistribution.com/4c4d25f498804c57947dca57a6dd7e83-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["yarış", "motor", "engel"],
    metrics: { playCount: 198000, likes: 10300 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "13",
    gameDistId: "candy-13",
    title: "Candy Match 3",
    slug: "candy-match",
    description: "Tatlı şekerleri eşleştirerek en yüksek puanı topla!",
    articleHTML: `
      <h3>Candy Match 3: Tatlı Bir Bulmaca Deneyimi</h3>
      <p>Şeker patlatma oyunları yıllardır her yaştan oyuncunun vazgeçilmezi olmuştur. Candy Match 3, bu klasik türün en renkli ve eğlenceli örneklerinden biridir. Oyundaki amacınız, aynı renkteki en az üç şekeri yan yana veya üst üste getirerek onları patlatmak ve hedeflenen puana ulaşmaktır.</p>
      <p>Bölümler ilerledikçe oyun sadece şekerleri eşleştirmekten ibaret olmaz; buzlanmış alanları kırmak, çikolataları temizlemek veya belirli sayıda özel şekeri toplamak gibi çeşitli görevler karşınıza çıkar.</p>
      <h4>Özel Şekerlerin Gücünü Kullanın</h4>
      <p>Dört şekeri eşleştirdiğinizde satır veya sütun patlatan çizgili şekerler elde edersiniz. Beş şekeri L veya T şeklinde eşleştirdiğinizde ise etrafındaki her şeyi patlatan bombalı şekerler kazanırsınız. Eğer beş şekeri düz bir çizgide eşleştirmeyi başarırsanız, tahtadaki tüm aynı renkli şekerleri yok eden devasa bir renk bombası kazanırsınız! OyunLimanı'nda bu tatlı maceraya hemen başlayın.</p>
    `,
    instructions: "Şekerleri kaydırarak yer değiştirin ve 3'lü kombinasyonlar oluşturun.",
    category: { name: "Bulmaca", slug: "bulmaca" },
    thumbnailUrl: "https://img.gamedistribution.com/5a797ea3c4a54c2fae84ea875d8cfe36-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["bulmaca", "eşleştirme", "şeker"],
    metrics: { playCount: 210000, likes: 11500 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "14",
    gameDistId: "block-craft-14",
    title: "Block Craft 3D",
    slug: "block-craft",
    description: "Kendi hayalindeki dünyayı inşa et! Sınırsız blok ve eşya seni bekliyor.",
    articleHTML: `
      <h3>Block Craft 3D: Hayallerini İnşa Et</h3>
      <p>Minecraft'ın öncülük ettiği yaratıcı kum havuzu (sandbox) tarzı oyunlar, oyunculara sınır tanımayan bir özgürlük sunar. Block Craft 3D de bu türün tarayıcı üzerinden kolayca oynanabilen harika bir versiyonudur. İster küçük bir kulübe isterseniz de devasa bir şato inşa edin; tek sınır hayal gücünüz!</p>
      <p>Oyuna başlarken size rastgele oluşturulmuş devasa bir açık dünya sunulur. Etraftaki ağaçları keserek odun, dağları kazarak taş ve maden çıkarabilirsiniz. Topladığınız bu kaynakları çalışma masasında (crafting) işleyerek yepyeni eşyalar üretebilirsiniz.</p>
      <h4>Hayatta Kalma Stratejisi</h4>
      <p>Gece olduğunda etrafta tehlikeli yaratıklar belirmeye başlar. Bu yüzden ilk gününüzde her şeyden önce kendinize güvenli bir barınak inşa etmeli ve bir yatak yapmalısınız. Madenlerin derinliklerine indikçe daha değerli metaller bulabilir ve daha güçlü aletler üretebilirsiniz. OyunLimanı ayrıcalığıyla bu sonsuz dünyaya hemen adım atın.</p>
    `,
    instructions: "WASD ile hareket et. Sol tık ile blok kır, sağ tık ile blok yerleştir.",
    category: { name: "Macera", slug: "macera" },
    thumbnailUrl: "https://img.gamedistribution.com/9f47ae0890c14a72ac2c4f3cb1e8e685-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["macera", "3d", "inşa"],
    metrics: { playCount: 345000, likes: 22000 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "15",
    gameDistId: "impostor-15",
    title: "Impostor Hunt",
    slug: "impostor-hunt",
    description: "Uzay gemisindeki haini bul veya hain olarak herkesi alt et!",
    articleHTML: `
      <h3>Impostor Hunt: Uzayda Gizem ve İhanet</h3>
      <p>Among Us fırtınasının bir benzeri olan Impostor Hunt, arkadaşlarınızla veya dünyanın dört bir yanından oyuncularla oynayabileceğiniz son derece gerilimli bir blöf ve strateji oyunudur. Bir uzay gemisinin mürettebatısınız ve aranızda kılık değiştirmiş bir veya birden fazla hain (impostor) bulunuyor.</p>
      <p>Eğer masum bir mürettebat üyesiyseniz (crewmate), göreviniz gemideki arızaları onarmak ve şüpheli davranışlar sergileyen kişileri acil durum toplantılarında tespit edip uzay boşluğuna fırlatmaktır. Eğer hainseniz, görev yapan oyuncuları tek tek avlamalı ve bunu yaparken yakalanmamalısınız.</p>
      <h4>İyi Bir Blöf Nasıl Yapılır?</h4>
      <p>Hain olduğunuzda en önemli taktik, sahte görev yapıyormuş gibi davranmaktır (fake task). Ayrıca cinayet işledikten sonra havalandırma deliklerini (vent) kullanarak olay yerinden hızla uzaklaşabilirsiniz. Toplantılarda kendinizi savunurken soğukkanlı olmalı ve suçu başkalarının üzerine atmalısınız. OyunLimanı'nda zekanızı konuşturarak bu gerilim dolu uzay macerasını hemen deneyimleyin.</p>
    `,
    instructions: "Fare ve WASD tuşları ile kontrol edin. Toplantılarda sohbet bölümünü kullanın.",
    category: { name: "Strateji", slug: "strateji" },
    thumbnailUrl: "https://img.gamedistribution.com/e1a12aa3abc04adcaf6fef00f56c605b-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["strateji", "uzay", "multiplayer"],
    metrics: { playCount: 420000, likes: 31000 },
    isActive: true,
    createdAt: Date.now(),
  },
  {
    id: "16",
    gameDistId: "pac-maze-16",
    title: "Pac Maze 3D",
    slug: "pac-maze",
    description: "Klasik labirent oyununu 3D grafiklerle yeniden yaşayın! Hayaletlerden kaçın.",
    articleHTML: `
      <h3>Pac Maze 3D: Efsanenin Dönüşü</h3>
      <p>Arcade oyunlarının atası sayılan klasik labirent oyununun modern ve üç boyutlu hali olan Pac Maze 3D, hem nostalji yaşatıyor hem de yepyeni bir heyecan sunuyor. Amacınız, karmaşık bir labirentin içine dağılmış olan tüm sarı noktaları toplayarak bir sonraki bölüme geçmek. Ancak arkanızda sürekli sizi kovalayan renkli hayaletler var!</p>
      <p>3D kamera açısı, oyunun zorluğunu bir kat daha artırıyor çünkü labirentin tamamını yukarıdan göremiyorsunuz. Köşeyi döndüğünüzde aniden bir hayaletle burun buruna gelebilirsiniz. Bu yüzden refleksleriniz çok keskin olmalı.</p>
      <h4>Güç Peletlerini Akıllıca Kullanın</h4>
      <p>Labirentin köşelerinde bulunan büyük güç peletlerini (power pellets) yediğinizde, hayaletler geçici bir süreliğine maviye döner ve kaçmaya başlarlar. Bu kısa süre zarfında onları yiyerek ekstra puan kazanabilirsiniz. Ancak güç peletlerini oyunun başlarında harcamak yerine, köşeye sıkıştığınız zor anlarda kullanmak çok daha iyi bir stratejidir. OyunLimanı'nda nostalji rüzgarına kapılın!</p>
    `,
    instructions: "Yön tuşları veya WASD ile karakteri yönlendirin.",
    category: { name: "Macera", slug: "macera" },
    thumbnailUrl: "https://img.gamedistribution.com/d7a529f0e0e94e39a5b6cfe4b0942e89-512x512.jpeg",
    iframeUrl: "https://html5.gamedistribution.com/rvvASMiM/c988cc38c43746df9dbd25d3e3e3e4d3/index.html",
    tags: ["macera", "arcade", "klasik"],
    metrics: { playCount: 156000, likes: 9400 },
    isActive: true,
    createdAt: Date.now(),
  }
];
