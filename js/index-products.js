/**
 * SCRIPTS for "El Rincon del Otaku" web
 * @author Draco0503, Jaekwin
 */

// As we could not call JSON.load() because of CORS auth, we had to declare JSON on the file
const json = {
  "mangas": [{
    "id": "1",
    "name": "Bleach",
    "img": "resources/img/products/Accion/Bleach/Fotito.jpg",
    "descr": "Kurosaki Ichigo es un joven como cualquier otro de la ciudad de Karakura, pero con un poder nato: puede ver a los Espíritus. Su vida es tranquila, serena pero sin sentido, hasta que se encuentra con Kuchiki Rukia, una Shinigami de la Sociedad de Almas que se encontraba enuna misión que se salió de control, tomando la única opción de transferirle su poder a Kurosaki Ichigo, convirtiéndolo en el Shinigami Sustituto. Ambos se vieron involucrados desde ese momento en la batalla para salvaguardar a la Ciudad de Karakura y a sus amigos. Cada persona que se cruza en su camino termina llenando su vida de acción e impulsándolo a superarse cada vez mas sin olvidar lo que es mas importante para él: Proteger a su familia y amigos de lo que sea.",
    "category": ["Accion", "Comedia", "Superpoderes", "Samurai", "Fantasia", "Romance", "Sobrenatural"],
    "stock": 150,
    "price": 8.0
  },
  {
    "id": "2",
    "name": "Chainsaw Man",
    "img": "resources/img/products/Accion/Chainsaw_Man/Fotito.jpg",
    "descr": "Cuando su padre murió, Denji se vio obligado a saldar una gran deuda y no había forma de pagarla. Pero gracias a la ayuda de un Demonio Perro que salvó llamado Pochita, Denji es capaz de sobrevivir convirtiéndose en un Cazador de demonios a sueldo, haciendo trabajos para los Yakuza. Los poderes motosierra de Pochita son útiles contra estos poderosos demonios. Y cuando Denji termina siendo asesinado por un demonio, Pochita se sacrifica para revivirlo. Pero ahora Denji ha renacido como una especie de extraño híbrido Demonio-Humano. ¡Ahora es Chainsaw Man! Después de su transformación, es reclutado rápidamente y obligado a unirse a los Cazadores de Demonios de Seguridad Pública bajo amenaza de exterminio ya que técnicamente es un Demonio. Ahora que vive cómodamente por primera vez en su vida, Denji lucha por determinar sus sueños y establecer relaciones significativas mientras mata demonios y trabaja junto a otros excéntricos cazadores.",
    "category": ["Accion", "Horror", "Sobrenatural", "Demonios", "Comedia", "Fantasia", "Romance"],
    "stock": 500,
    "price": 8.50
  },
  {
    "id": "3",
    "name": "Tokyo Revengers",
    "img": "resources/img/products/Accion/Tokyo_Revengers/Fotito.jpeg",
    "descr": "Takemichi es un desempleado de 26 años que se entera que la chica con la que salía en la escuela media ha muerto. Pero sucede un accidente y regresa en el tiempo a sus años de escuela media. Él jura que cambiara el futuro y lograra salvar a la chica que era su novia, para lograrlo su objetivo es llegar a la cima de la región más violenta de bandas de delincuentes.",
    "category": ["Accion", "Drama", "Romance", "Vida escolar", "Misterio", "Sobrenatural", "Tragedia"],
    "stock": 1000,
    "price": 12.0
  },
  {
    "id": "4",
    "name": "Gakkou Gurashii",
    "img": "resources/img/products/Apocaliptico/Gakkou_Gurashii/Fotito.jpg",
    "descr": "Takeya Yuki, le encanta la escuela y su club, el club de la vida escolar, donde Rii-san es la presidenta, Kurumi-chan otra miembro y Megu-nee es la profesora asesor. Ellas viven su vida diaria alegremente, o es lo que aparentan, el ambiente a su alrededor es diferente. Un edificio destruido, sombras extrañas que divagan por los alrededores y ademas ellas son las únicas allí.. ¿Que sucede? y porque Yuki vive tan alegremente e ignorando estos hechos?",
    "category": ["Rencuentros de la vida", "Sobrenatural", "Horror", "Misterio", "Apocaliptico", "Vida escolar"],
    "stock": 50,
    "price": 8.0
  },
  {
    "id": "5",
    "name": "Plunderer",
    "img": "resources/img/products/Apocaliptico/Plunderer/Fotito.jpg",
    "descr": "Año 305 del calendario Alcián, el mundo se encuentra controlado por los numeros. Cada ser humano que nace es marcado con un Contador. Este contador puede subir con cualquier acción; ya sea la cantidad de Kilómetros recorridos, o si alguna persona dice que su comida es sabrosa. Pero si su cuenta se reduce a 0, será enviado al abismo. Antes que la cuenta de la madre de Hina llegará a 0, su ultima voluntad fue que buscara al Legendario Rey Caido...",
    "category": ["Accion", "Ecchi", "Comedia", "Aventura", "Romance", "Apocaliptico", "Superpoderes"],
    "stock": 120,
    "price": 8.0
  },
  {
    "id": "6",
    "name": "Shuumatsu no Valkyre",
    "img": "resources/img/products/Apocaliptico/Shuumatsu_no_Valkyre/Fotito.jpg",
    "descr": "Shuumatsu no Valkyrie es una historia de fantasía que comienza cuando los Dioses se reúnen con el objetivo de decidir si la humanidad debe vivir o morir. Y aunque llegan a la conclusión de que debe perecer, una Valkyria propone que Dioses y humanos luchen una última vez para tomar tan difícil decisión. Así, 13 humanos pelearán contra 13 Dioses para resolver el destino de la humanidad.",
    "category": ["Accion", "Historia", "Artes marciales", "Sobrenatural", "Fantasia", "Apocaliptico", "Samurai"],
    "stock": 500,
    "price": 8.50
  },
  {
    "id": "7",
    "name": "Dragon ball",
    "img": "resources/img/products/Artes_Marciales/Dragon_Ball/Fotito.jpg",
    "descr": "Versión oficial a color del manga de Dragon Ball. Su trama describe las aventuras de Goku, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad. Conforme transcurre la trama, conoce a otros personajes que le ayudan en este propósito. El nombre de la serie proviene de unas esferas mágicas que al ser reunidas invocan a un dragón que concede deseos. En varias ocasiones resultan útiles tanto para Goku y sus amigos como para la humanidad, aunque también son procuradas de forma constante por algunos seres malignos.",
    "category": ["Accion", "Aventura", "Ciencia Ficcion", "Artes marciales", "Comedia"],
    "stock": 1000,
    "price": 7.50
  },
  {
    "id": "8",
    "name": "Sun Ken Rock",
    "img": "resources/img/products/Artes_Marciales/Sun_Ken_Rock/Fotito.jpg",
    "descr": "Ken, un joven chico japonés, está enamorado de una joven coreana, Yumin. Él la siguió en Corea y quiere convertirse en un policía como ella. Pero entonces, se encuentra a la cabeza de una banda local, ¿Qué pasará con Ken?",
    "category": ["Accion", "Comedia", "Drama", "Ecchi", "Romance", "Artes marciales"],
    "stock": 400,
    "price": 9.0
  },
  {
    "id": "9",
    "name": "Taboo-Tatto",
    "img": "resources/img/products/Artes_Marciales/Taboo_Tatto/Fotito.jpg",
    "descr": "Seigi, estudiante de secundario y practicante de Artes Marciales, frecuentemente siente que su deber es proteger a los más débiles. Un día, defiende a un hombre sin hogar de algunos pandilleros y el hombre le regresa un extraño tatuaje en la palma de la mano a cambio. El tatuaje es un arma secreta producida en la guerra armada entre América y el Reino de Serinistan.",
    "category": ["Accion", "Ecchi", "Sobrenatural", "Misterio", "Romance", "Vida escolar", "Artes marciales"],
    "stock": 100,
    "price": 8.0
  },
  {
    "id": "10",
    "name": "Nanatsu no Taizai",
    "img": "resources/img/products/Aventura/Nanatsu_no_Taizai/Fotito.jpeg",
    "descr": "Los Siete Pecados Capitales representan a un grupo de malvados caballeros que intentaron en algún momento derrocar al rey de Britania. Durante la revuelta, lograron ser derrotados por los caballeros sagrados desapareciendo del reino. Una década después, los mismos caballeros sagrados organizaron un golpe de estado, tomando prisionero al rey y autodenominándose como los nuevos dueños de Britania. La princesa Elizabeth logró escapar y se puso como meta buscar a los siete pecados capitales, los únicos capaces de hacer frente a los Caballeros Sagrados.",
    "category": ["Accion", "Aventura", "Comedia", "Fantasia", "Magia", "Sobrenatural", "Ecchi"],
    "stock": 800,
    "price": 8.50
  },
  {
    "id": "11",
    "name": "Naruto",
    "img": "resources/img/products/Aventura/Naruto/Fotito.jpg",
    "descr": "Naruto Uzumaki, un aprendiz de ninja de la Aldea Oculta de Konoha es un chico travieso que desea llegar a ser el Hokage de la aldea para demostrar a todos lo que vale. En su interior alberga al Kyubi, una de las nueve bestias que en su momento arrasaron al mundo ninja. Junto a sus compañeros Sakura Haruno, Sasuke Uchiha y su maestro Kakashi Hatake deberá crecer como guerrero peleando contra un grupo de ninjas renegados: Akatsuki, que buscan a los portadores de las nueve bestias. El enemigo siempre tiene razones para obrar como mal y puede acabar atrayendo a sus amigos más preciados. Naruto se debatirá entre proteger a la villa de los enemigos o intentar reestablecer los lazos perdidos.",
    "category": ["Accion", "Comedia", "Artes marciales", "Aventura", "Sobrenatural", "Superpoderes"],
    "stock": 1000,
    "price": 7.50
  },
  {
    "id": "12",
    "name": "One piece",
    "img": "resources/img/products/Aventura/One_Piece/Fotito.jpg",
    "descr": "Hace veintidós años, el legendario pirata, Gold D. Roger fue ejecutado. Sus últimas palabras fueron que su tesoro conocido como One Piece estaba escondido en algún lugar dentro del vasto océano conocido como Grand Line. Esto dio inicio a la Era de los Piratas.Ahora, Monkey D. Luffy, un joven que, inspirado por su ídolo de la infancia emprende su viajebuscando el One Piece y convertirse en el Rey de los Piratas.",
    "category": ["Accion", "Aventura", "Comedia", "Artes marciales", "Superpoderes", "Misterio", "Sobrenatural"],
    "stock": 1000,
    "price": 7.50
  },
  {
    "id": "13",
    "name": "Assassination classrom",
    "img": "resources/img/products/Ciencia_Ficcion/Assassination_Classroom/Fotito.jpg",
    "descr": "Trata sobre un maestro al que bautizan como Korosensei (imposible de matar) que destruyeparcialmente la Luna dejando una permanente Luna creciente y amenaza con destruir la Tierra en el plazo de un año, a menos que algún alumno de la clase 3-E de la secundaria Kunugigaoka, a los que él imparte clase, lo asesine antes de la graduación. Para motivar a la clase a acabar con Koro-sensei, el gobierno promete dar como recompensa 10 billones de yenes a quien lo consiga.",
    "category": ["Accion", "Comedia", "Rencuentros de la vida", "Superpoderes", "Ciencia Ficcion", "Vida escolar", "Drama"],
    "stock": 500,
    "price": 8.0
  },
  {
    "id": "14",
    "name": "Hataraku saibou",
    "img": "resources/img/products/Ciencia_Ficcion/Hataraku_Saibou/Fotito.jpg",
    "descr": "Dentro del cuerpo humano se dice que hay aproximadamente 60 millones de células. Los glóbulos blancos, glóbulos, plaquetas, macrófagos, células de memoria, células T asesinas, células asesinas naturales, células B, mastocitos rojos y muchos más! Todas estas células diferentes trabajan sin descanso dentro del cuerpo, sin descansar por un momento, ¡Dispuestas a resistir la invasión de entidades extranjeras como gérmenes y virus hasta el final!",
    "category": ["Accion", "Comedia", "Ciencia Ficcion", "Drama", "Fantasia"],
    "stock": 450,
    "price": 8.50
  },
  {
    "id": "15",
    "name": "Made in abyss",
    "img": "resources/img/products/Ciencia_Ficcion/Made_in_Abyss/Fotito.jpg",
    "descr": "El enorme sistema de cuevas, conocido como El Abismo, es el último lugar inexplorado en el mundo. Nadie sabe que tan profundo es este agujero titánico, habitado por extrañas y maravillosas criaturas y lleno de misterio y reliquias antiguas de propósito desconocido para la humanidad. Generaciones de valientes aventureros han sido atraídos a las profundidades cripticas del Abismo. Con el paso del tiempo estos exploradores son conocidos como Exploradores de las Profundidades. En Oath, el pueblo al borde del Abismo, vive una pequeña niña huérfana llamada Riko, que sueña con convertirse en una gran exploradora como su madre y descubrir los misterios del Abismo. Un día explorando las obscuras profundidades se encuentra con un niño, que resulta ser un robot...",
    "category": ["Accion", "Aventura", "Psicologico", "Sobrenatural", "Ciencia Ficcion", "Fantasia", "Magia", "Misterio", "Supervivencia"],
    "stock": 150,
    "price": 8.0
  },
  {
    "id": "16",
    "name": "Eromanga sensei",
    "img": "resources/img/products/Comedia/Eromanga_Sensei/Fotito.jpg",
    "descr": "Basado en la novela ligera, gira en torno a Masamune Izumi, un chico de instituto que escribe novelas ligeras. Las ilustraciones de las novelas de Masamune las hace un tal “Eromanga Sensei”, las hace con un toque erótico enorme. Masamune nunca ha conocido en persona a su ilustrador. Sin embargo un día descubre la verdad: “Eromanga Sensei” es en realidad su propia hermanastra pequeña.",
    "category": ["Comedia", "Drama", "Ecchi", "Romance", "Harem", "Rencuentros de la vida"],
    "stock": 300,
    "price": 8.0
  },
  {
    "id": "17",
    "name": "Kobayashi-san Chi no Maid Dragon",
    "img": "resources/img/products/Comedia/KobayashiSan_Chi_no_Maid_Dragon/Fotito.jpg",
    "descr": "Kobayashi vive en un apartamento cuando un dia un dragon llamado Tooru toca a su puerta. Tooru piensa que los humanos son humildes y tontos pero ella tiene una deuda con Kobayashi que la salvo en el pasado. Por eso todos los dias Tooru trata de usar sus poderes para ayudar a Kobayashi en varias cosas. Una comedia de una señora de oficina y una linda chica maid dragon viviendo juntas el día a día",
    "category": ["Comedia", "Rencuentros de la vida", "Fantasia", "Yuri"],
    "stock": 850,
    "price": 8.50
  },
  {
    "id": "18",
    "name": "One punch man",
    "img": "resources/img/products/Comedia/One_Punch_Man/Fotito.jpg",
    "descr": "La historia tiene lugar en una de las metrópolis de ficción de la Tierra, la Ciudad-Z. ¡Sigue la vida de un héroe promedio que gana todas sus peleas con un solo puño! Esto le causa un montón de frustración, ahora ya no siente la adrenalina y la emoción de una dura pelea. Tal vez ese riguroso entrenamiento para volverse fuerte no valió la pena. Después de todo, ¿qué tiene de bueno tener un poder tan aplastante?",
    "category": ["Accion", "Comedia", "Sobrenatural", "Ciencia Ficcion", "Superpoderes", "Artes marciales"],
    "stock": 500,
    "price": 8.0
  },
  {
    "id": "19",
    "name": "Bungou stray dogs",
    "img": "resources/img/products/Crimen/Bungou_Stray_Dogs/Fotito.jpg",
    "descr": "Nakajima Atsushi fue expulsado de su orfanato, y ahora no tiene ningún lugar al que ir. Mientras que él está de pie junto a un río, en al borde de la inanición, rescata a un hombre caprichoso que intenta suicidarse. Ese hombre es Dazai Osamu, y él y su compañero Kunikida son miembros de una agencia de detectives muy especial. Ellos tienen poderes sobrenaturales, y hacen frente a los casos que son muy peligrosos para la policía o el ejército. Están detrás de la pista de un tigre que ha aparecido en la zona recientemente, en la época en que Atsushi llegó al lugar. El tigre parece tener una conexión con Atsushi, y por el momento el caso está resuelto, ¡está claro que el futuro de Atsushi implicará tener la compañía de Dazai y el resto de los detectives por más tiempo!",
    "category": ["Accion", "Sobrenatural", "Misterio", "Drama", "Comedia", "Ciencia Ficcion", "Superpoderes"],
    "stock": 800,
    "price": 8.50
  },
  {
    "id": "20",
    "name": "id-invaded",
    "img": "resources/img/products/Crimen/Id_Invaded/Fotito.jpg",
    "descr": "Tiene lugar en un mundo donde los investigadores tienen el poder de aprovechar el inconsciente de un asesino y ver partes fragmentadas de su psique.",
    "category": ["Crimen", "Drama", "Misterio", "Ciencia Ficcion", "Superpoderes"],
    "stock": 150,
    "price": 8.0
  },
  {
    "id": "21",
    "name": "Spy x Family",
    "img": "resources/img/products/Crimen/Spy_x_Family/Fotito.jpg",
    "descr": "El espía profesional conocido como <Twilight> ha realizado misiones en cubierto durante muchos años, con la finalidad de conseguir un mundo mejor. Pero un día, él recibe un particular y difícil encargo por parte de sus superiores. Para esta misión, ¡¿tiene que formar una familia temporal y comenzar una nueva vida?! Una comedia de acción y espías sobre una familia como ninguna otra.",
    "category": ["Accion", "Comedia", "Romance", "Drama", "Rencuentros de la vida"],
    "stock": 750,
    "price": 8.50
  },
  {
    "id": "22",
    "name": "Ao no exorcist",
    "img": "resources/img/products/Demonios/Ao_no_Exorcist/Fotito.jpg",
    "descr": "El mundo de Ao no Exorcist está compuesto de dos dimensiones que están una en frente de la otra como cada lado de un espejo. El primer mundo es el de los humanos, Assiah; el segundo, el de los demonios, Gehenna. Por norma, los viajes y contactos entre los dos mundos son imposibles, pero los demonios pueden ir al mundo humano poseyendo todo lo que lo compone. El más poderoso de los demonios, intentó ingresar al mundo humano, sin embargo fue incapaz de hacerlo ya que no existe en el Assiah un cuerpo lo suficientemente resistente como para albergar su inconmensurable poder. De esta manera, conoció a una mujer humana a la que pudo poseer y así engendró dos hijos mellizos con esta, los cuales fueron llamados Rin y Yukio Okumura.",
    "category": ["Accion", "Aventura", "Comedia", "Drama", "Fantasia", "Magia", "Sobrenatural", "Romance", "Vida escolar", "Demonios"],
    "stock": 750,
    "price": 8.0
  },
  {
    "id": "23",
    "name": "Hataraku maou-sama",
    "img": "resources/img/products/Demonios/Hataraku_MaouSama/Fotito.jpg",
    "descr": "La historia da comienzo en un mundo donde una gran guerra entre el bien y el mal, entre demonios y héroes que ha terminado con tantas vidas y ha desolado tantas tierras, parece estar a punto de terminar cuando un guerrero arrincona al gran demonio Maou y al único de sus generales que aún no ha sido vencido en Isla Ente. La lucha no promete nada bueno para el rey demonio, que opta por una retirada estratégica y temporal para replantearse la situación y reconquistar el mundo, de modo que decide abrir un portal a otro mundo que traspasará bajo la promesa de volver y recuperar lo que es suyo. El portal le lleva directo a un Japón actual, donde deberá buscarse la vida si pretende algún día cumplir su última promesa, sin embargo, no tardará en decidirse a conquistar también éste nuevo mundo... Si no se lo impide alguien que le ha seguido a través del portal.",
    "category": ["Comedia", "Fantasia", "Romance", "Demonios", "Magia", "Sobrenatural"],
    "stock": 350,
    "price": 8.0
  },
  {
    "id": "24",
    "name": "Kuroshitsuji",
    "img": "resources/img/products/Demonios/Kuroshitsuji/Fotito.jpg",
    "descr": "En la época victoriana de Europa, un niño pierde todo lo que alguna vez tuvo y quiso… sin embargo, momentos antes de morir, él logra hacer un contrato con un demonio; él dará su alma, a cambio de venganza. Ciel Phantomhive de solo 13 años es ahora el jefe de la corporación Phantomhive, maneja todos los asuntos relacionados con negocios, y así mismo, hace trabajos “encubiertos” para la Reina de Inglaterra. Su compañero es su nuevo mayordomo demonio, Sebastian Michaelis. Mientras investigan el culpable y la razón del asesinato los padres de Ciel además de la tortura que él tuvo que sufrir,ambos se verán envueltos en peligrosos e intrigantes casos llenos de misterios e interrogantes que deberán descifrar.",
    "category": ["Accion", "Comedia", "Fantasia", "Sobrenatural", "Misterio", "Psicologico", "Thriller", "Trageida", "Historia", "Demonios"],
    "stock": 450,
    "price": 8.50
  },
  {
    "id": "25",
    "name": "Clannad",
    "img": "resources/img/products/Drama/Clannad/Fotito.jpg",
    "descr": "Tomoya Okazaki es un joven de tercer año de instituto que parece importarle poco su desempeño escolar, y sumada a su actitud conflictiva originada por problemas familiares, es marcado como “delincuente” en su escuela por la gran mayoría de sus compañeros que están más ocupados pensando en lo que harán una vez acaben la escuela. Tomoya, sin amigos, oficio ni beneficio; conoce providencialmente a Nagisa Furukawa, una chica enfermiza algo lenta en los estudios que se quedó sin amigos puesto que todos ellos ya se habían graduado. Poco a poco ambos entablan amistad y mientras el joven empieza a descubrir que su escuela no era tan mal como aparentaba, empieza a conocer a más chicas. Sin embargo, a pesar de todo, el muchacho y sus amigas guardan secretos, sueños y deseos que irán entrecruzándose…",
    "category": ["Romance", "Vida escolar", "Rencuentros de la vida", "Harem", "Tragedia"],
    "stock": 120,
    "price": 8.0
  },
  {
    "id": "26",
    "name": "Plastic Memories",
    "img": "resources/img/products/Drama/Plastic_Memories/Fotito.jpg",
    "descr": "En un futuro no muy lejano, los androides que se ven exactamente como los seres humanos comienzan a extenderse por el mundo. La productora androide SA Corp. produjo Giftia, un nuevo tipo de androide que tiene la mayor cantidad de emoción y cualidades similares a las humanas de cualquier otro modelo nunca visto. Sin embargo, debido a problemas en la tecnología, los androides tienen una vida de servicio, y una vez que pasan eso, se pone bastante mal. Por esta razón, SA Corp. crea un servicio de terminal con el fin de recuperar Giftia que han ido más allá de su vida útil. Un empleado nuevo al servicio del terminal llamado Tsukasa Mizugaki forma un equipo con el Giftia Isla para recuperar los otros androides. Esta serie cuenta con Michiru Kinushima como protagonista.",
    "category": ["Drama", "Comedia", "Ciencia Ficcion", "Romance", "Vida escolar"],
    "stock": 120,
    "price": 8.0
  },
  {
    "id": "27",
    "name": "Shigatsu wa Kimi no Uso",
    "img": "resources/img/products/Drama/Shigatsu_wa_Kimi_no_Uso/Fotito.png",
    "descr": "El prodigio del piano Arima Kosei, dominaba la competición y todos los niños músicos sabían su nombre. Pero, después que su madre, quien también era su instructora, falleciera, él tuvo un colapso mental mientras actuaba en un recital que resultó en que él no fue capaz de escuchar más el sonido de su piano, a pesar de que sus oídos estaban perfectamente bien. Después de dos años, Kosei no ha tocado el piano y ve el mundo en un solo tono y sin estilo o color. Él estaba contento de vivir su vida con sus buenos amigos Tsubaki y Watari, hasta que, un día, una chica cambió todo. Miyazono Kaori es una hermosa violinista de espíritu libre quien toca el estilo que refleja su personalidad. Kaori ayuda a Kosei a regresar al mundo de la música y le muestra que debería ser libre y romper el molde a diferencia del estilo rígido y estructurado que Kosei usaba.",
    "category": ["Comedia", "Drama", "Rencuentros de la vida", "Romance", "Tragedia", "Vida escolar", "Musica"],
    "stock": 450,
    "price": 8.50
  },
  {
    "id": "28",
    "name": "Chobits",
    "img": "resources/img/products/Ecchi/Chobits/Fotito.jpg",
    "descr": "El mañana, las persocons (inteligencia artificial con forma de chicas) serán tan comunes como los computadores y notebooks hoy. No obstante, tal como hoy, no todos podrán acceder a la tecnología, especialmente, cuando vienes del campo, y para ordeñar vacas no necesitas tener lo último. Pero, si estás muy necesitado, tal como hoy, puedes ir a la basura. No es muy elegante, pero a veces se pueden encontrar interesantes sorpresas. Vive junto a Hideki y Chi la aventura de enamorarse y conocer a esa persona solo para ti",
    "category": ["Comedia", "Ecchi", "Romance", "Ciencia Ficcion", "Rencuentros de la vida"],
    "stock": 500,
    "price": 12.50
  },
  {
    "id": "29",
    "name": "High School DxD",
    "img": "resources/img/products/Ecchi/High_School_DxD/Fotito.jpg",
    "descr": "La historia está protagonizada por Issei Hyoudou, un muchacho de segundo año de instituto bastante salido al que una chica asesina en la primera cita de su vida. Issei se reencarna como demonio, y desde ese mismo día trabaja como sirviente de Riasu, una chica demonio de altísimo nivel que resulta ser la más guapa y popular de todo el instituto.",
    "category": ["Accion", "Comedia", "Ecchi", "Fantasia", "Romance", "Harem", "Superpoderes"],
    "stock": 1000,
    "price": 8.50
  },
  {
    "id": "30",
    "name": "Nekopara",
    "img": "resources/img/products/Ecchi/Nekopara/Fotito.jpg",
    "descr": "La historia nos pone en la piel de Kashou Minazuki, quien va a abrir la pastelería La Soleil tras huir de la cadena familiar de repostería clásica japonesa de su familia. Tras finalizar la mudanza, descubre que con él han venido las chicas gato Chocola y Vanilla, que le harán la vida un poco más complicada a su amo en esta divertida comedia algo picantona.",
    "category": ["Comedia", "Ecchi", "Harem", "Romance", "Drama", "Rencuentros de la vida", "Sobrenatural"],
    "stock": 450,
    "price": 8.0
  },
  {
    "id": "31",
    "name": "Kono Subarashii Sekai ni Shukufuku wo!",
    "img": "resources/img/products/Fantasia/Kono_Subarashii_Sekai_ni_Shukufuku_wo/Fotito.jpg",
    "descr": "La vida de Satou Kazuma, un hikikomori al cual le gusta los videojuegos, termina de forma abrupta debido a un accidente de tráfico... o eso se suponía, pero cuando despierta, una hermosa chica la cual se hace llamar a sí misma Diosa apareció frente a sus ojos, hey, tengo algo lindo para ti, ¿quieres ir a otro mundo?, solo puedes llevar una cosa de tu elección contigo... entonces te llevare, a partir de aquí, la gran aventura de subyugar al rey demonio empezará para el reencarnado Kazuma... o eso es lo que uno pensaría, !pero es la tarea de conseguir alimento, ropa y albergue la que empieza!, a pesar de que Kazuma quería vivir en paz, la diosa continua causándole problemas uno tras otro, y eventualmente, !atraerán la atención del ejercito del Rey Demonio!",
    "category": ["Accion", "Aventura", "Comedia", "Ecchi", "Romance", "Reencarnacion", "Harem"],
    "stock": 1000,
    "price": 8.50
  },
  {
    "id": "32",
    "name": "Noragami",
    "img": "resources/img/products/Fantasia/Noragami/Fotito.jpeg",
    "descr": "Yato es un dios menor cuyo sueño es tener una gran cantidad de seguidores que lo adoren y recen plegarias por él. Desafortunadamente, su sueño está lejos de hacerse realidad, ya que no tiene ni siquiera un solo santuario dedicado a él. Para empeorar las cosas, la única socia que tenía para ayudar a resolver los problemas de la gente acaba de renunciar. Su divina suerte sólo podría cambiar cuando se tropieza con Iki Hiyori, quien le salva la vida. Este hecho deja a Hiyori en un buen lío también, por lo que se quedará a su lado hasta que su problema se resuelva. Junto a Hiyori y su nuevo instrumento divino Yukine, Yato hará todo lo que pueda para ganar fama, reconocimiento y sólo tal vez, un templo dedicado a él también.",
    "category": ["Accion", "Comedia", "Fantasia", "Sobrenatural", "Romance", "Superpoderes", "Tragedia"],
    "stock": 1000,
    "price": 8.0
  },
  {
    "id": "33",
    "name": "Tate no Yuusha",
    "img": "resources/img/products/Fantasia/Tate_no_Yuusha/Fotito.jpg",
    "descr": "Iwatani Naofumi es convocado a otro mundo a convertirse en uno de los cuatro héroes, llamados the shield hero. Comenzando con la mala popularidad y etiquetado como el más débil, Naofumi se vio traicionado a los tres días de su aventura. habiendo perderdido la fe y el dinero, todo lo que queda es sólo su escudo. Con la promesa de vengarse de aquellos que le habían traicionado, el camino de Naofumi es...",
    "category": ["Aventura", "Fantasia", "Harem", "Romance", "Drama", "Sobrenatural"],
    "stock": 450,
    "price": 8.50
  },
  {
    "id": "34",
    "name": "Ouran Host Club",
    "img": "resources/img/products/Bender/Ouran_Host_Club/Fotito.jpg",
    "descr": "A pesar de proceder de una familia humilde, Haruhi Fujioka estudia en el prestigioso y exclusivo instituto Ouran. Un día, mientras busca una sala donde poder estudiar con tranquilidad, rompe accidentalmente un carísimo jarrón que pertenece al misterioso y prácticamente desconocido club, es el Host Club, un club formado por 6 chicos guapisimos que se dedican a hacer compañía a las chicas que pagan por ello. los miembros deciden que Haruhi trabajará en el club hasta que devuelva los ocho millones de yenes que valía el jarrón.",
    "category": ["Comedia", "Vida escolar", "Harem", "Genero Bender", "Romance"],
    "stock": 350,
    "price": 8.0
  },
  {
    "id": "35",
    "name": "Ranma",
    "img": "resources/img/products/Bender/Ranma/Fotito.jpg",
    "descr": "Genma y Ranma Saotome, padre e hijo, practican un arte marcial llamada kenpo. Un incidente mientras entrenaban en China les ha otorgado la particular habilidad de transformarse al contacto con el agua fría: Genma en un panda y su hijo Ranma, en chica. Eso sí, al tocar agua caliente, ambos vuelven a sus respectivos estados originales. De nuevo en Japón, los Saotome se instalan en el dojo Tendô, del estilo musabetsu kakutô. Se decide que Ranma y la hija menor de Tendô, Akane, sean prometidos, pero ellos no están del todo de acuerdo.",
    "category": ["Comedia", "Artes marciales", "Accion", "Ecchi", "Genero Bender", "Vida escolar"],
    "stock": 450,
    "price": 8.0
  },
  {
    "id": "36",
    "name": "Saikyou no kurokishi",
    "img": "resources/img/products/Bender/Saikyou_no_Kurokishi/Fotito.jpg",
    "descr": "Albright, que era famoso como El Caballero Negro más fuerte, reencarnó como una niña, María, cuya cinta le sentaba bien por la misma razón. María, de 16 años, es actualmente una doncella de la familia Marqués de Urband en asistencia a la Hija de las Marquesinas, Relena. Después de que Relena se comprometiera con el 4º Príncipe, el área alrededor de María se había vuelto más concurrida ...",
    "category": ["Accion", "Aventura", "Fantasia", "Reencarnacion", "Romance", "Genero Bender"],
    "stock": 300,
    "price": 8.0
  },
  {
    "id": "37",
    "name": "Another",
    "img": "resources/img/products/Gore/Another/Fotito.jpg",
    "descr": "La historia se centra en una clase maldita y en los hilos del destino que llevan a todos los alumnos y alumnas de la misma hasta a la muerte. Hacía 26 años había una chica llamada Misaki que asistía a esa clase. Buena deportista, popular, caía bien a todo el mundo, las mejores notas… pero un día murió dejando un vacío enorme en sus compañeros de clases. Estos, decididos a no olvidarla, siguieron actuando como si Misaki siguiera viva hasta la graduación. Años después, en primavera de 1998, un chico llamado Koichi Sakakibara es transferido a esa clase para no tardar en darse cuenta de que hay algo raro ahí, especialmente con una hermosa y apartada chica llamada Misaki Mei quien viste un parche en el ojo y siempre esta sola dibujando.",
    "category": ["Drama", "Horror", "Misterio", "Vida escolar", "Gore", "Sobrenatural", "Thriller"],
    "stock": 800,
    "price": 8.50
  },
  {
    "id": "38",
    "name": "Berserck",
    "img": "resources/img/products/Gore/Berserk/Fotito.jpg",
    "descr": "Guts, un ex-mercenario conocido como el Espadachín Negro, y en búsqueda de su venganza. Luego de una tumultuosa infancia, él finalmente encuentra a alguien a quien respeta y en quien puede confiar; y todo se desmorona cuando esta persona le arrebata todo lo importante para él, con el propósito de cumplir sus propios deseos. Ahora, siendo portador de la marca, Guts se encuentra condenado a un destino en el que es implacablemente perseguido por seres demoníacos. Encaminado en una terrible misión llena de desgracia, Guts, armado con una espada gigante y una fuerza monstruosa, no dejará que nada lo detenga, ni siquiera la misma muerte, hasta que sea capaz de tomar la cabeza de aquél que le robó toda su humanidad.",
    "category": ["Accion", "Fantasia", "Horror", "Psicologico", "Tragedia", "Demonios", "Gore"],
    "stock": 450,
    "price": 8.0
  },
  {
    "id": "39",
    "name": "Tokyo Ghoul",
    "img": "resources/img/products/Gore/Tokyo_Ghoul/Fotito.jpeg",
    "descr": "Al acecho en las sombras de Tokio hay seres atemorizantes conocidos como ghouls, que satisfacen su hambre alimentándose de humanos una vez que cae la noche. Se ha establecido una organización conocida como la Comisión de Contramedidas Ghoul (CCG) en respuesta a los constantes ataques a los ciudadanos y como un medio para purgar a estas criaturas. Sin embargo, el problema radica en identificar a los ghouls, ya que se disfrazan de humanos y viven entre las masas para que sea más fácil cazar presas. Ken Kaneki, un estudiante de primer año universitario desprevenido, se encuentra atrapado en un mundoentre humanos y ghouls cuando su cita resulta ser un ghoul después de comer su carne. Apenas sobreviviendo a este encuentro después de ser llevado a un hospital, descubre que se ha convertido en un medio ghoul como resultado de la cirugía que recibió. Incapaz de satisfacer su ansia intensa de carne humana por medios convencionales, Kaneki es acogido por amistosos ghouls que dirigen una cafetería para ayudarlo con su transición. Cuando comienza lo que cree que será una nueva vida pacífica, poco sabe que está a punto de encontrarse en el centro de una guerra entre sus nuevos camaradas y las fuerzas del CCG, y que su nueva existencia ha llamado la atención de ghouls por todo Tokio.",
    "category": ["Accion", "Sobrenatural", "Thriller", "Gore", "Policiaco", "Psicologico", "Tragedia"],
    "stock": 1000,
    "price": 8.50
  },
  {
    "id": "40",
    "name": "Diablick Lovers",
    "img": "resources/img/products/Harem/Diabolick_Lovers/Fotito.jpeg",
    "descr": "Yui Komori es una chica positiva quien nunca se ha visto envuelta en problemas viendo espíritus o teniendo experiencias paranormales. En su segundo año de instituto, es transferida a una nueva escuela. Esta es una escuela nocturna donde acuden jóvenes famosos, debido al trabajo de sus padres. Sin embargo, corre el rumor de que hay vampiros en la institución. Es aquí donde la joven Yui entrará en contacto con los 6 hermanos vampiros.",
    "category": ["Vida escolar", "Harem", "Romance", "Vampiros"],
    "stock": 250,
    "price": 8.0
  },
  {
    "id": "41",
    "name": "Nisekoi",
    "img": "resources/img/products/Harem/Nisekoi/Fotito.jpg",
    "descr": "Un muchacho de instituto que parece muy normal y que hizo una promesa de pequeño con el que él pensaba que era el amor de su vida: ella se llevaba la llave y él la cerradura. Un día se encuentra con Chitoge Kirisaki, una chica con la que su primer contacto es que le dé un rodillazo en la cara. Raku es en realidad el heredero de un gran clan de yakuzas, y acabará teniendo que relacionarse con la recién conocida Chitoge sin poder evitarlo, puesto que es la hija del jefe de un clan rival. Ambos fingirán tener una relación por el bien de sus familias, y todo el mundo se lo cree. Raku descubrirá que Chitoge guarda con cariño una llave desde su infancia pero no recuerda de qué era.",
    "category": ["Comedia", "Drama", "Rencuentros de la vida", "Romance", "Harem", "Vida escolar"],
    "stock": 450,
    "price": 8.0
  },
  {
    "id": "42",
    "name": "To Love Ru",
    "img": "resources/img/products/Harem/To_Love_Ru/Fotito.jpg",
    "descr": "La historia es acerca de Yuuki Rito, un muchacho de secundaria que no puede confesarse con la chica de sus sueños, Sairenji Haruna. Un día, cuando el regresó a casa y malhumorado, en la bañera, una misteriosa, chica desnuda, aparece de la nada. Su nombre es Lala y ella viene del planeta Deviluke, donde ella es la heredera al trono. Su padre quiere que ella vuelva a su planeta de origen, lo que le permite contraer matrimonio con uno de los candidatos a marido, pero ella decide que quiere casarse con Rito con el fin de permanecer en la Tierra.",
    "category": ["Ciencia Ficcion", "Comedia", "Ecchi", "Vida escolar", "Harem", "Romance"],
    "stock": 550,
    "price": 8.0
  },
  {
    "id": "43",
    "name": "Akagami no Shirayuki hime",
    "img": "resources/img/products/Historia/Akagami_no_Shirayuki_Hime/Fotito.jpg",
    "descr": "Shirayuki es una bella muchacha pelirroja, algo muy extraño en su país, que trabaja como curandera. Ante la insistencia del príncipe del país en desposarla, Shirayuki decide huir. Es entonces cuando conoce a Zen, el príncipe de un país vecino al suyo. A pesar de su juventud, Zen sabe cómo hacerse respetar por sus conciudadanos, lo que lleva a Shirayuki a convertirse en la médico de la corte.",
    "category": ["Drama", "Fantasia", "Historia", "Romance"],
    "stock": 500,
    "price": 8.50
  },
  {
    "id": "44",
    "name": "Jigokuraku",
    "img": "resources/img/products/Historia/Jigokuraku/Fotito.jpeg",
    "descr": "Gabimaru es un ninja de la villa de la piedra condenado a muerte y sometido a varias torturas que, al igual que el resto de sus camaradas, no puede morir, a pesar de que así lo desea ya que nada le ata a esta vida y no le tiene apego a la vida humana.. ¿o tal vez no sea así? Conoce su travesía junto con todo el elenco involucrado, a una misteriosa Isla, en busca del perdón y redención, en busca del... Elixir de la Vida",
    "category": ["Accion", "Aventura", "Drama", "Historia", "Gore", "Romance"],
    "stock":1000,
    "price": 8.50
  },
  {
  "id": "45",
    "name": "Vagabond",
    "img": "resources/img/products/Historia/Vagabond/Fotito.jpg",
    "descr": "Vagabond nos relata la historia de Shinme Takezo, un joven salvaje que no duda en involucrarse en combates a muerte para forjarse una reputación y que está destinado a convertirse en el legendario Santo de la Espada Miyamoto Musashi. Este es el viaje de un joven vagabundo con una sola meta ser invencible bajo el sol y para esto desafiará a los más grandes artistas marciales de su época lo cual hará crecer como guerrero y como persona.",
    "category": ["Accion", "Aventura", "Drama", "Historia", "Samurai"],
    "stock": 500,
    "price": 8.0
  },
    {
  "id": "46",
    "name": "Blood Lad",
    "img": "resources/img/products/Horror/Blood_Lad/Fotito.jpeg",
    "descr": "Blood Lad sigue a Staz, un vampiro del surrealista Mundo de los Demonios, y Fuyumi, una chica normal que se pasea por accidente en el mundo de los demonios a través de un portal. Posteriormente,tras reunirse entre sí, Fuyumi es asesinada por una planta carnívora y se convierte en un fantasma,esto hace que Staz asuma la responsabilidad y le prometa a Fuyumi devolverle la vida cueste lo que cueste.",
    "category": ["Accion", "Aventura", "Comedia", "Ecchi", "Horror", "Demonios", "Vampiros"],
    "stock": 800,
    "price": 8.0
  },
    {
  "id": "47",
    "name": "Jujutsu Kaisen",
    "img": "resources/img/products/Horror/Jujutsu_Kaisen/Fotito.jpg",
    "descr": "Yuji Itadori es un estudiante con una increíble fuerza física pero no tiene ningún interés en los deportes y prefiere ser parte del club de ocultismo. Un día, espíritu maligno real aparece en la escuela y cambia la vida de Yuji para siempre.",
    "category": ["Accion", "Sobrenatural", "Drama", "Horror", "Vida escolar", "Demonios", "Gore"],
    "stock": 1000,
    "price": 8.0
  },
    {
  "id": "48",
    "name": "Mirai Nikki",
    "img": "resources/img/products/Horror/Mirai_Nikki/Fotito.jpg",
    "descr": "Yukiteru Amano es un chico solitario que gasta todo su tiempo escribiendo un diario en su celular, desde el punto de vista de un espectador, y hablando con su amigo imaginario Deus ex Machina; Dios del tiempo y espacio. Un día, Deus resulta no ser sólo un amigo imaginario sino realmente un Dios que,además de Yukiteru, 11 personas más también podían ver y escuchar; este ser divino crea un juego de supervivencia, en el cual le ha dado un diario predictivo del futuro a cada uno de los participantes elegidos. Las reglas del juego son simples, los 12 dueños de diarios deben matarse entre ellos y el último que sobreviva se convertirá en el nuevo sucesor al trono de Dios, ya que Deus está muriendo. Así, Yukiteru es presentado -sin revelar identidades- mediante Deus a los demás como un usuario más del diario del futuro, y como el último participante en entrar al juego",
    "category": ["Accion", "Sobrenatural", "Horror", "Misterio", "Psicologico", "Romance", "Thriller"],
    "stock": 1000,
    "price": 8.50
  },
    {
  "id": "49",
    "name": "Fairy Tail",
    "img": "resources/img/products/Magia/Fairy_Tail/Fotito.jpg",
    "descr": "Un día, Lucy Heartfilia, es maga de 17 años de espíritus estelares, huye de su hogar y viaja al reino de Fiore para cumplir su sueño de unirse al gremio de magos Fairy Tail. En el camino conoce a Natsu Dragneel, un joven que busca a Igneel (el Padre Adoptivo) y que viaja acompañado de su mejor amigo, un gato parlante llamado Happy. Poco después del encuentro entre ambos, un impostor del «Salamander» de Fairy Tail (apodo de Natsu) se presenta en Fiore y Lucy, al creer que es un miembro de dicho gremio, decide seguirlo aunque la intención de éste es venderla como esclava. Natsu la rescata y le revela que él es el verdadero Salamander, pues cuenta con las habilidades de un Dragon Slayer (esto es, magia especializada en el dominio de poderes de tipo dragón, la cual se caracteriza por su antigüedad). Tras esto, le ofrece unirse a Fairy Tail y ella acepta. Acompaña las aventuras de Natsu, Lucy, Happy y sus amigos de Fairy Tail.",
    "category": ["Accion", "Aventura", "Comedia", "Drama", "Ecchi", "Fantasia", "Magia"],
    "stock": 1000,
    "price": 8.0
  },
    {
  "id": "50",
    "name": "Gakuen Alice",
    "img": "resources/img/products/Magia/Gakuen_Alice/Fotito.jpg",
    "descr": "Gakuen Alice cuenta la historia de Mikan Sakura, una niña de 10 años que en busca de su mejor amiga, Imai Hotaru, ingresa de forma imprevista en una escuela muy especial y extraña. A ella sólo pueden entrar personas que posean un alice, es decir un poder especial que puede ser de cualquier tipo, desde la telepatía o volar hasta controlar el fuego o convertirse en gato. Y Mikan sin saberlo cuenta con un alice, que al principio para todos era insignificante por eso termino en grupo de los alice especiales... Tambien hay un grupo de alice peligros, en el cual se encuentra Natsume, los estudiantes de este grupos son utilizados por los directivos del colegio para realizar misiones secretas y peligrosas.",
    "category": ["Aventura", "Comedia", "Drama", "Fantasia", "Magia", "Sobrenatural", "Romance", "Vida escolar"],
    "stock": 450,
    "price":8.0
  },
    {
  "id": "51",
    "name": "Madoka Magica",
    "img": "resources/img/products/Magia/Madoka/Fotito.jpg",
    "descr": "Tras una extraña pesadilla, una chica de 14 años llamada Madoka Kaname y su mejor amiga Sayaka Miki se encuentran con una extraña criatura llamada Kyubey, que les ofrece hacer un contrato por el que pueden pedir un deseo a cambio de convertirse en una chica mágica y luchar contra las brujas, seres nacidos de la desesperación responsables de asesinatos y suicidios. Por otro lado, una estudiante recién llegada llamada Homura Akemi está decidida a impedir que Madoka acepte la oferta. Al examinar la vida de una chica mágica, Madoka se da cuenta de que no es algo tan deseable como pensaba y que supone encontrarse constantemente con la muerte, el aislamiento y la agonía. Madoka pronto descubre el lado más oscuro de ser una chica mágica y se cuestiona si realmente debe",
    "category": ["Drama", "Fantasia", "Magia", "Sobrenatural", "Horror", "Psicologico"],
    "stock": 850,
    "price": 8.50
  },
    {
  "id": "52",
    "name": "Mercenary Enrollment",
    "img": "resources/img/products/Manhwa/Mercenary_Enrollment/Fotito.jpg",
    "descr": "Yu Ijin fue el único sobreviviente de un accidente de avión cuando era pequeño. Después de convertirse en mercenario para sobrevivir durante 10 años, regresa con su familia a su ciudad natal.",
    "category": ["Accion", "Artes marciales", "Militar", "Vida escolar", "Supervivencia", "Manhwa"],
    "stock": 350,
    "price": 8.50
  },
    {
  "id": "53",
    "name": "Solo leveling",
    "img": "resources/img/products/Manhwa/Solo_Leveling/Fotito.jpg",
    "descr": "Hace 10 años, después de que La Puerta que conectaba el mundo real con el mundo de los monstruos se abriera, algunas de las personas recibieron el poder de cazar los monstruos que vivían al otro lado de esta. Se les conoce como cazadores. Sin embargo, no todos los cazadores son poderosos. Sung Jin-Woo, un cazador de rango E, es alguien que tiene que arriesgar su vida en humildes calabozos, lo llaman el más débil del mundo. Al no tener habilidades para mostrar, apenas gana dinero luchando en mazmorras de bajo nivel... Al menos hasta que se encontro con una mazmorra oculta durante una incursión. Luego de estar en el borde de la muerte,Sung Jin-Woo tiene un Segundo Despertar y con este consigue un poder invaluable.",
    "category": ["Accion", "Sobrenatural", "Comedia", "Magia", "Reencarnacion", "Apocaliptico", "Romance", "Manhwa"],
    "stock": 1000,
    "price": 15.0
  },
    {
  "id": "54",
    "name": "The Beginning After the End",
    "img": "resources/img/products/Manhwa/The_Beginning_After_the_End/Fotito.jpg",
    "descr": "El Rey Grey tiene una fuerza, riqueza y prestigio incomparables en un mundo gobernado por la habilidad marcial. Sin embargo, la soledad se mantiene muy por detrás de aquellos con gran poder. Debajo del glamoroso exterior de un poderoso rey acecha el caparazón del hombre, desprovisto de propósito y voluntad. Reencarnado en un nuevo mundo lleno de magia y monstruos, el rey tiene una segunda oportunidad de revivir su vida. Sin embargo, corregir su error pasado no será su único desafío. Debajo de la paz y la prosperidad del nuevo mundo hay una corriente subterránea que amenaza con destruir todo para lo que ha trabajado, cuestionando su papel y la razón para nacer de nuevo.",
    "category": ["Accion", "Aventura", "Comedia", "Drama", "Magia", "Reencarnacion", "Superpoderes", "Manhwa"],
    "stock": 500,
    "price": 12.0
  },
    {
  "id": "55",
    "name": "Tomb Raider King",
    "img": "resources/img/products/Manhwa/Tomb_Raider_King/Fotito.jpg",
    "descr": "Las tumbas de Dios empezaron a aparecer alrededor del mundo. Debido a las reliquias dentro de las tumbas, muchos pudieron usar este legendario poder para ellos mismos, mientras que otros fueron esclavizados por los usuarios. Sin embargo, un Saqueador de Tumbas apareció con el propósito de robarestas reliquias. El Rey de los Saqueador de Tumbas, ¡Maldición! ¡¿Ese bastardo ya saqueó este lugar también?! Lo que tienes me pertenece a mí. Lo que tengo definitivamente me pertenece. ¡Esta es la historia de un Saqueador de Tumbas revivido que hará todo para reclamar todas las tumbas y reliquias para él solo!",
    "category": ["Accion", "Fantasia", "Reencarnacion", "Aventura", "Comedia", "Sobrenatural", "Manhwa"],
    "stock": 350,
    "price": 8.50
  },
    {
  "id": "56",
    "name": "Wind Breaker",
    "img": "resources/img/products/Manhwa/Wind_Breaker/Fotito.jpg",
    "descr": "Jo Ja-Hyun (Jay) es el presidente estudiantil de Taeyang High (Sunny High). Él no es solo un estudiante inteligente, sino también un ciclista extremo con altas técnicas. A medida que decida seguir su bicicleta, conocerá a sus amigos, amor y encontrará grandes aventuras.",
    "category": ["Accion", "Drama", "Deporte", "Romance", "Manhwa"],
    "stock": 500,
    "price": 12.50
  },
    {
  "id": "57",
    "name": "Code Geass",
    "img": "resources/img/products/Mecha/Code_Geass/Fotito.jpg",
    "descr": "El 10 de agosto de 2010, del calendario imperial, el Sacro Imperio de Britannia sobrepasó a las fuerzas japonesas y conquistó el país en menos de un mes, haciendo uso de sus armas robóticas, los Knightmare Frames. Japón perdió su libertad y derechos, y pasó a ser llamada Área 11 (eleven). Sus habitantes, ahora llamados Elevens (onces), fueron obligados a sobrevivir en guetos. Sin embargo aún persisten grupos que se resisten y luchan contra el Imperio por la independencia de Japón (Terroristas). Después de que su padre, el Emperador de Britannia (Charles), no hiciese nada para atrapar a los terroristas que asesinaron a su madre y dejaron ciega e invalida a su hermana, cuando niño Lelouch juró destruir Britannia. Siete años más tarde, en el Área 11 conoce a una misteriosa chica llamada C.C., con quien realiza un contrato a cambio de un poder llamado Geass. Con él, Lelouch finalmente tiene el poder que necesita para derrotar a Britannia y realizar sus dos deseos.",
    "category": ["Accion", "Drama", "Sobrenatural", "Mecha", "Tragedia", "Vida escolar"],
    "stock": 850,
    "price": 8.0
  },
    {
  "id": "58",
    "name": "Darling in the Franxx",
    "img": "resources/img/products/Mecha/Darling_in_the_Franxx/Fotito.jpg",
    "descr": "La historia se desarrolla en un futuro distante donde la tierra esta arruinada y la humanidad se ha establecido en un fuerte móvil llamado Ciudad Plantation. Los pilotos producidos dentro de las Plantation viven en Mistilteinn también conocida como la jaula de pájaros, los niños viven ahí ignorando por completo el mundo exterior o la libertad del cielo. Sus vidas consisten en realizar misiones en contra de sus enemigos, quienes son unas formas de vida gigantes y misteriosas llamadas Klaxosaurios y son los niños quienes pilotean los robots FranXX los cuales deben enfrentarse a ellos. Para los niños montar a los FranXX no es mas que una prueba de su existencia. Un chico llamado código 016 (Hiro), fue alguna vez conocido como un prodigio, sin embargo, se ha quedado detrás y su existencia parece ser innecesaria. No pilotear un FranXX es lo mismo que dejar de existir. El día que está por abandonar Mistilteinn, una misteriosa chica conocida como Zero Two aparece frente a el en lago de la Plantation, con dos cuernos en su cabeza...",
    "category": ["Mecha", "Romance", "Ciencia Ficcion", "Drama", "Accion", "Ecchi"],
    "stock": 1000,
    "price": 8.50
  },
    {
  "id": "59",
    "name": "Date a Live",
    "img": "resources/img/products/Mecha/Date_a_Live/Fotito.jpg",
    "descr": "Ayer 10 de abril fue el último día de vacaciones de primavera, por lo que a partir de mañana será el primer día de clases. Después de ser despertado por su linda hermanita, Itsuka Shidou creía que sería el comienzo de otro día normal. Sin imaginarse que conocería a una chica que se hacía llamar espíritu. Junto con una onda de choque repentina, el paisaje urbano desapareció sin dejar rastro alguno. En una esquina de la calle que se había convertido en un crater, estaba la chica. Sus palabras fueron: ¿Tú también has venido a matarme? Ella es la cátastrofe que destruirá a la humanidad, un monstruo de origen desconocido, y rechazado por el mundo. Solo hay dos formas de detener a esta chica: La aniquilación o la conversación. Su hermana pequeña utilizando un uniforme militar, le dijo a Shidou: Ya que es de esta manera, solo tienes que salir con ella y hacer que el espíritu se enamore de ti ¡¿Queeeeeeeeeeeeeeé?! ¡¡Y así comienza una nueva era de como un chico conoce a una chica!!",
    "category": ["Accion", "Romance", "Harem", "Mecha", "Vida escolar", "Sobrenatural"],
    "stock": 850,
    "price": 8.0
  },
    {
  "id": "60",
    "name": "86 Eighty-six",
    "img": "resources/img/products/Militar/86_Eighty_Six/Fotito.jpg",
    "descr": "Ningún país se burlará de la noción de no someter a los cerdos a los derechos humanos, Así, mientras difiera su lenguaje, difiera el color de su piel, se considere que sus ancestros son de diferentes tribus, se encontrarán cerdos que adquieren la apariencia de humanos. Al reprimirlos y matarlos, seguramente no hay ningún problema por decir con respecto a las violaciones de los derechos humanos.",
    "category": ["Drama", "Accion", "Mecha", "Tragedia", "Militar", "Ciencia Ficcion"],
    "stock": 350,
    "price": 8.0
  },
    {
  "id": "61",
    "name": "Full Metal Panic",
    "img": "resources/img/products/Militar/Full_Metal_Panic/Fotito.jpg",
    "descr": "A un sargento llamado Sousuke Sagara se le asigna una tarea importante. El de proteger a la chica de secundaria Chidori Kaname. Sousuke es un genio militar, gana alto rango a una edad temprana, pero debido a su extraña educación, carece de habilidades sociales. Ahora, se ve a sí mismo como un pez fuera del agua cuando intenta proteger a una chica de una organización malvada y entregar su trabajo escolar a tiempo.",
    "category": ["Accion", "Ciencia Ficcion", "Comedia", "Drama", "Militar", "Mecha", "Romance", "Vida escolar"],
    "stock": 350,
    "price": 8.0
  },
    {
  "id": "62",
    "name": "Touken Ranbu",
    "img": "resources/img/products/Militar/Touken_Ranbu/Fotito.jpg",
    "descr": "Año 2205. Los “revisionistas históricos” han comenzado a lanzar ataques al pasado como parte de su plan de cambiar la historia. Los Saniwa, quienes están al cargo de proteger la historia, pueden imbuir vida a los objetos. Los más fuertes entre ellos son los Token Danshi. Esta historia nos muestra sus animadas vidas.",
    "category": ["Accion", "Comedia", "Drama", "Fantasia", "Historia", "Militar", "Rencuentros de la vida"],
    "stock": 350,
    "price": 8.0
  },
    {
  "id": "63",
    "name": "Danganronpa",
    "img": "resources/img/products/Misterio/Danganronpa/Fotito.jpg",
    "descr": "Un grupo de 15 estudiantes de secundaria de élite se reúnen en una escuela secundaria muy especial y de clase alta. Graduarse de esta escuela secundaria significa esencialmente que tendrá éxito en la vida, pero graduarse es muy difícil. La escuela está presidida por un oso llamado Monokuma, y él les explica que su graduación depende de cometer un asesinato. La única forma de graduarse es matar a uno de tus compañeros de clase y salirte con la tuya. Si los otros compañeros de clase descubren la identidad del asesino, el asesino es el único ejecutado. Sin embargo, si no logran atrapar al asesino, solo los graduados del asesino y los demás son aniquilados. ¿Cuál de los 15 sobrevivirá al baño de sangre por venir?",
    "category": ["Accion", "Horror", "Misterio", "Psicologico", "Vida escolar"],
    "stock": 500,
    "price": 8.50
  },
    {
  "id": "64",
    "name": "Kakegurui",
    "img": "resources/img/products/Misterio/Kakegurui/Fotito.jpg",
    "descr": "Hyakkaou private academy, es una prestigiosa escuela privada, en esta los estudiantes están divididos por estratos sociales. Por encima de todos esta el consejo estudiantil, quienes gobiernan a todos los estudiantes con sus apuestas. Es el cielo si ganas y el infierno si pierdes. Con todo esto una nueva chica llega a la escuela, Jyabami yumeko, que en su primer dia es invitada a un juego. ¿Ganará o perderá? Quien sabe que esconde esta chica.",
    "category": ["Drama", "Horror", "Misterio", "Psicologico", "Vida escolar"],
    "stock": 850,
    "price": 9.50
  },
    {
  "id": "65",
    "name": "Kemono Jihen",
    "img": "resources/img/products/Misterio/Kemono_Jihen/Fotito.jpg",
    "descr": "Kemono Jihen se trata de un niño conocido como Dorota-bou que es evitado por la gente que lo rodea, e Inugami, un detective que se especializa en el ocultismo. La historia comienza con Inugami llegandoa la ciudad del muchacho para investigar un caso donde muchos ganados están muriendo y sus cuerpos sepudren en una sola noche...",
    "category": ["Misterio", "Sobrenatural", "Thriller", "Accion", "Comedia"],
    "stock": 450,
    "price": 8.0
  },
    {
  "id": "66",
    "name": "K-On",
    "img": "resources/img/products/Musica/K_On/Fotito.jpg",
    "descr": "La historia sigue la vida de cuatro chicas que asisten a su primer año de preparatoria, comenzando con Yui Hirasawa y su impaciencia en la búsqueda de un club en el cual participar. Por otro lado, está Ritsu Tainaka (baterista) quien le propone a su mejor amiga Mio Akiyama (bajista), inscribirse juntas en el club de música ligera del instituto; desafortunadamente se enteran que está próximo a ser cerrado debido a que todos sus miembros se habían graduado el año anterior. Debido a que el mínimo permitido para formar un club es de 4 integrantes, Ritsu y Mio tratan desesperadamente de conseguir interesados en participar, y en el intento lograrán reclutar a Tsumugi Kotobuki quien les indica que sólo sabe tocar teclado. Esto significa que ya sólo hace falta un miembro más para tener nuevamente al club en funcionamiento, y es aquí donde, tras una larga espera, Yui se decide finalmente por un club, precisamente el de música ligera. Con esto lo salva de la extinción. Desafortunadamente",
    "category": ["Comedia", "Rencuentros de la vida", "Vida escolar", "Musica"],
    "stock": 550,
    "price": 9.0
  },
    {
  "id": "67",
    "name": "Love Live",
    "img": "resources/img/products/Musica/Love_Live/Fotito.jpg",
    "descr": "Centrada en la Preparatoria Otonokizaka, la cual esta en riesgo de cerrarse debido al numero reducido de estudiantes. Para evitarlo, nueve chicas se volveran idols para promocionar su escuela.",
    "category": ["Vida escolar", "Musica", "Rencuentros de la vida"],
    "stock": 550,
    "price": 9.50
  },
    {
  "id": "68",
    "name": "Uta no prince-sama",
    "img": "resources/img/products/Musica/Uta_no_PrinceSama/Fotito.jpg",
    "descr": "Después de haber entrado ambos en eventos deportivos internacionales de Super Star Sports, también conocido como Triple S, Starish y Quartet Night han llegado a ser los dos últimos concursantes. Sin embargo, ya que tienen que esperar a los resultados, un viejo rival reaparece con un rendimiento repentino. Heavens, quienes perdio contra Starish en los Uta no Prince?Brand-New Awards, estan de vuelta - y con siete miembros, ¡más grandes que nunca! ¡¿Qué depara el futuro para estos grupos de Idols Súper populares?!",
    "category": ["Comedia", "Harem", "Musica", "Romance"],
    "stock": 550,
    "price": 9.0
  },  {
  "id": "69",
    "name": "Death Note",
    "img": "resources/img/products/Policiaco/Death_Note/Fotito.jpg",
    "descr": "Un shinigami, como dios de la muerte, puede matar a cualquier persona, siempre que vea la cara de su víctima y escriba su nombre en un cuaderno llamado Death Note. Un día, Ryuk, aburrido por el estilo de vida shinigami e interesado en ver cómo un humano usaría un Death Note, deja caer uno en el reino humano. Light Yagami, estudiante de secundaria y prodigio, se topa con el Death Note y, dado que deplora el estado del mundo, prueba el cuaderno mortal escribiendo el nombre de un criminal. Cuando el criminal muere inmediatamente después de su experimento con la Death Note, Light se sorprende y reconoce rápidamente cuán devastador podría ser el poder que ha caído en sus manos. Con esta capacidad divina, Light decide extinguir a todos los criminales para construir un mundo nuevo donde el crimen no exista y la gente lo adore como un dios. La policía, sin embargo, descubre rápidamente que un asesino en serie está apuntando a criminales y, en consecuencia, trata de detener al culpable. Para hacer esto, los investigadores japoneses cuentan con la ayuda del mejor detective del mundo: un hombre joven y excéntrico conocido solo por el nombre de L.",
    "category": ["Accion", "Drama", "Sobrenatural", "Misterio", "Psicologico", "Crimen", "Policiaco"],
    "stock": 450,
    "price": 8.50
  },
    {
  "id": "70",
    "name": "Kekkai Sensen",
    "img": "resources/img/products/Policiaco/Kekkai_Sensen/Fotito.jpg",
    "descr": "Una brecha entre el mundo humano y el alienígena se abrió, y el puente es la vieja ciudad de nueva york conocida ahora como la Parcela de Jerusalen, la cual se encuentra aislada del mundo por unaespera niebla, Leonard Watch se unira a una misteriosa organización llamada Libra, con el fin de descubrir el secreto de su misterioso poder, ayudado por personas con poderes sobre-humanos.",
    "category": ["Accion", "Sobrenatural", "Ciencia Ficcion", "Comedia", "Drama", "Superpoderes", "Policiaco"],
    "stock": 350,
    "price": 8.0
  },
    {
  "id": "71",
    "name": "Psycho-pass",
    "img": "resources/img/products/Policiaco/Psycho_Pass/Fotito.jpg",
    "descr": "En un futuro próximo en el que es posible medir y cuantificar de forma instantánea el estado mental de una persona y su personalidad. Esta información es grabada y procesada; ?Psycho-Pass? hace referencia al nombre común de las referencias al respecto de cada persona. La historia nos presenta a Shinya Kougami,un agente de la ley en este mundo cuya tarea es luchar contra el crimen.",
    "category": ["Accion", "Ciencia Ficcion", "Policiaco", "Psicologico"],
    "stock": 500,
    "price": 8.0
  },
    {
  "id": "72",
    "name": "Ajin",
    "img": "resources/img/products/Psicologico/Ajin/Fotito.jpeg",
    "descr": "La historia sigue a un estudiante de secundaria llamado Kei Nagai, que se ve atrapado en un accidente de tráfico, muere, pero inmediatamente revive y se entera de que no es humano, es un Ajin, una misteriosa criatura que no puede morir. Asustado, huye de los humanos, pero es ayudado por su amigo Kaito, que se une a él en su huir de la civilización. Luego se ve envuelto en un conflicto entre humanos y Ajin y él debe elegir un bando.",
    "category": ["Accion", "Sobrenatural", "Horror", "Misterio", "Psicologico", "Drama", "Tragedia"],
    "stock": 450,
    "price": 8.0
  },
  {
  "id": "73",
    "name": "Btooom!",
    "img": "resources/img/products/Psicologico/Btoom/Fotito.jpg",
    "descr": "Sakamoto Ryuuta es un desempleado de 22 años de edad que vive con su madre. En el mundo real, puede que no tenga nada especial, pero online, es uno de los mejores jugadores del mundo del juego de combate BTOOOM. Un día, se despierta en lo que parece ser una isla tropical, aunque él no recuerda nada de cómo o por qué ha llegado hasta ahí. Desplazándose por la isla, Ryuuta ve a alguien y pide ayuda. El extraño responde lanzándole una bomba, entonces Ryuuta se da cuenta de que su vida está en peligro, y que de alguna manera ha quedado atrapado en una versión real de su juego favorito.",
    "category": ["Accion", "Ciencia Ficcion", "Psicologico"],
    "stock": 350,
    "price": 8.0
  },
    {
  "id": "74",
    "name": "The Promised Neverland",
    "img": "resources/img/products/Psicologico/The_Promised_Neverland/Fotito.jpeg",
    "descr": "Por mucho que los niños la quieran, ella no es su madre. Viven juntos, pero no son familiares de sangre. Grace Field es un hogar al que son enviados los niños que no tienen padres. Un hogar irreemplazable para los 38 niños que allí viven felices su día a día, como si fueran hermanos, aunque al inicio fueran completos desconocidos. Al menos así era hasta que cierto descubrimiento cambió sus vidas por completo...",
    "category": ["Ciencia Ficcion", "Misterio", "Accion", "Horror", "Psicologico"],
    "stock": 1000,
    "price": 9.0
  },
    {
  "id": "75",
    "name": "Re-Zero",
    "img": "resources/img/products/Reencarnacion/Re_Zero/Fotito.jpg",
    "descr": "En la historia, Subaru Natsuki es un estudiante corriente de instituto que se pierde en un mundo alternativo, donde una preciosa chica de pelo plateado lo rescata. Para devolverle el favor decide quedarse con ella, pero el destino con el que carga la muchacha es mucho más pesado de lo que Subaru puede imaginar. Los enemigos atacan sin descanso, uno tras otro, hasta que finalmente mueren tanto élcomo la chica. Es entonces cuando Subaru descubre que tiene el poder de dar marcha atrás en el tiempoy volver al inicio de la historia, al punto en el que llegó al mundo desconocido. El problema es que él es el único que recuerda lo ocurrido.",
    "category": ["Drama", "Fantasia", "Psicologico", "Reencarnacion"],
    "stock": 1000,
    "price": 8.50
  },
    {
  "id": "76",
    "name": "Tensei shitara Slime Datta Ken",
    "img": "resources/img/products/Reencarnacion/Tensei_Shitara_Slime_Datta_Ken/Fotito.jpg",
    "descr": "Un hombre, que al tratar de salvar a su compañero de trabajo y su novia, fue apuñalado por un ladrón que escapaba. Mientras moría desangrado escuchó una voz extraña. Esta voz escuchó su lamento de haber muerto virgen y a causa de eso le dio la Habilidad Única Gran Sabio ¿Fue esto una burla? Ahora él ha reencarnado como un Slime en otro mundo, ¿Será este el inicio de una emocionante aventura?",
    "category": ["Accion", "Aventura", "Comedia", "Fantasia", "Reencarnacion", "Magia", "Harem"],
    "stock": 850,
    "price": 9.0
  },
    {
  "id": "77",
    "name": "Youjo Senki",
    "img": "resources/img/products/Reencarnacion/Youjo_Senki/Fotito.jpg",
    "descr": "Una joven chica que lucha en el frente de una guerra. Tiene el pelo rubio, ojos azules y una piel blanca, casi transparente, y es conocida por moverse como el viento en el campo de batalla. Ella es Tanya Degurechaff y se encarga de dirigir al ejército. Solía ser un asalariado de élite en Japón, pero debido a la ira de un dios, renació como una niña pequeña. Tanya lo da todo por avanzar en su carrera militar y se convertirá en la hechicera más poderosa del ejército imperial.",
    "category": ["Accion", "Fantasia", "Magia", "Militar", "Historia", "Reencarnacion", "Tragedia"],
    "stock": 450,
    "price": 8.0
  },
    {
  "id": "78",
    "name": "Aoharu x Kikanjuu",
    "img": "resources/img/products/Rencuentros_de_la_vida/Aoharu_x_Kikanjuu/Fotito.jpg",
    "descr": "Nos cuenta la historia de Hotaru Tachibana, una estudiante de preparatoria que se hace pasar por chico. Por culpa de circunstancias extrañas, la protagonista se siente atraída por el mundo de los juegos de supervivencia por culpa de un host, Masamune Matsuoka. Los dos formaran un equipo con el artista de ero-manga Toahru Yukimura, para convertirse en los mejores de Japón.",
    "category": ["Accion", "Comedia", "Rencuentros de la vida", "Genero Bender", "Deporte"],
    "stock": 350,
    "price": 8.0
  },
    {
  "id": "79",
    "name": "Ijiranaide, Nagatoro-san",
    "img": "resources/img/products/Rencuentros_de_la_vida/Ijiranaide_NagatoroSan/Fotito.jpg",
    "descr": "A la estudiante de preparatoria Hayase Nagatoro le encanta pasar su tiempo libre haciendo una cosa, ¡y eso es molestar a su Senpai! Después de que Nagatoro y sus amigos se topan con los dibujos del aspirante a artista, disfrutan molestando sin piedad al tímido Senpai. Nagatoro decide continuar con su cruel juego y lo visita a diario para poder obligar a Senpai a hacer lo que le interese en esemomento, especialmente si eso lo hace sentir incómodo. Ligeramente interesado por Nagatoro y algo temeroso de ella, Senpai está constantemente involucrado en sus payasadas mientras sus intereses, pasatiempos, apariencia e incluso personalidad se usan en su contra mientras ella se entretiene a sus expensas. A medida que pasa el tiempo, Senpai se da cuenta de que no le desagrada la presencia de Nagatoro, y los dos desarrollan una amistad incómoda mientras uno soporta pacientemente las payasadas del otro.",
    "category": ["Romance", "Vida escolar", "Comedia", "Rencuentros de la vida", "Ecchi"],
    "stock": 800,
    "price": 8.50
  },
    {
  "id": "80",
    "name": "Watamote",
    "img": "resources/img/products/Rencuentros_de_la_vida/Watamote/Fotito.jpg",
    "descr": "Kuroki Tomoko, una chica que tiene 50 años de experiencia en citas y que ha salido con más de un centenar de chicos… en juegos otome. En la vida real acaba de cumplir 15 años y va a dar comienzo su época en el instituto, está convencida de que con sus conocimientos será la más de popular. Una vez comienza el instituto, comienzan a pasar los días y se da cuenta de que no habla con nadie. ¿Cómo es posible? Un simple vistazo al espejo le hace darse cuenta de la realidad: no es precisamente una belleza y parece que hasta puede ser antipática. Poco a poco intentará cambiar para ser popular, pero claro, entre lo que le cuesta y lo que tiene una idea bastante distorsionada de la realidad, no será tan sencillo.",
    "category": ["Comedia", "Rencuentros de la vida", "Vida escolar", "Ecchi"],
    "stock": 850,
    "price": 8.0
  },
    {
  "id": "81",
    "name": "Ao haru Ride",
    "img": "resources/img/products/Romance/Ao_Haru_Ride/Fotito.jpg",
    "descr": "Yoshioka Futaba tiene algunas razones por las que quiere reiniciar su imagen de vida como un nuevo estudiante de secundaria. Porque ella es linda, ella fue condenada al ostracismo por sus amigas en la secundaria, y debido a un malentendido, no pudo concretar sus sentimientos a un chico el que siempre le ha gustado, Tanaka-kun. Ahora en la escuela secundaria, ella está decidida a ser tan poco femenina como sea posible para que sus amigas no vayan a estar celosas de ella. Mientras vivía su vida de esta manera con satisfacción, se encuentra con Tanaka-kun de nuevo, pero que ahora se conoce con el nombre de Mabuchi Kou. Él le dice que se sentía de la misma manera como lo hizo cuando eran más jóvenes, pero ahora las cosas no puede ser nunca de la misma forma otra vez. ¿Futaba podrá continuar con su amor que ni siquiera empezó desde hace tres años?",
    "category": ["Comedia", "Drama", "Rencuentros de la vida", "Romance", "Vida escolar"],
    "stock": 800,
    "price": 8.0
  },
  {
  "id": "82",
    "name": "Horimiya",
    "img": "resources/img/products/Romance/Horimiya/Fotito.jpeg",
    "descr": "Hori puede parecer como una adolescente normal, pero ella es una persona completamente diferente después de la escuela. En ausencia de sus padres, que son adictos al trabajo, Hori ha sido como una madre para su hermano pequeño desde niña. Entre el cuidado de su hermano y el trabajo doméstico, Horino tiene mucho tiempo para una vida social de una adolescente normal. Un día, conoce a otra persona que tampoco muestra su verdadero yo en la escuela: un chico tranquilo y con gafas llamado Miyamura. Ella había asumido que era aficionado a los libros, y posiblemente un otaku, pero Hori no podria estar tan errara. Fuera de la escuela, Miyamura es un chico agradable con numerosos piercings, y no es muy bueno en lo académico. Ahora los dos tienen alguien con quien puedan compartir las dos mitades ocultas de su vida!",
    "category": ["Comedia", "Rencuentros de la vida", "Romance", "Vida escolar"],
    "stock": 1000,
    "price": 8.50
  },
    {
  "id": "83",
    "name": "Kaichou wa maid-sama",
    "img": "resources/img/products/Romance/Kaichou_wa_MaidSama/Fotito.jpg",
    "descr": "La preparatoria Seika era un lugar sólo para hombres, pero recientemente se ha convertido en un colegio mixto, contando con apenas 20% de mujeres, ante un 80% de hombres. Allí, Misaki Ayuzawa toma en sus manos el poder, para hacer sentir seguras a las chicas, convirtiéndose en la presidenta del consejo estudiantil. Después de ser elegida, se gana entre los alumnos varones una muy mala fama de dictadora feminista, por lo que muchos la odian. Sin embargo, a pesar de su apariencia ruda, Misaki trabaja a medio tiempo en un Maid Caffé Latte. Desafortunadamente, Usui Takumi, el chico más popular del colegio (no solo entre las chicas, sino también entre los chicos) se interesa en ella tras verla vestida con su uniforme de maid, pero acepta guardarle el secreto.",
    "category": ["Comedia", "Drama", "Rencuentros de la vida", "Romance", "Vida escolar"],
    "stock": 850,
    "price": 8.0
  },
    {
  "id": "84",
    "name": "Dororo",
    "img": "resources/img/products/Samurai/Dororo/Fotito.jpg",
    "descr": "Daigo Kagemitsu, quien trabaja para un Samurai General en el Japón de los Estados en Guerra, promete ofrecer 48 partes de su aún no nacido hijo a 48 demonios a cambio del completo control de su nación. Cuando el bebé nace, Daigo hace que lo tiren al río, esperando que así este muera. Un amable sabio, sin embargo, lo encuentra y adopta, dicho sabio equipa a su pobre hijo con prótesis. El tiempo pasa y el bebé crece en un niño que se llama a si mismo Hyakkimaru. Cada vez que Hyakkimaru elimina un demonio, él recupera una de las partes del cuerpo que perdió. Hyakkimaru conoce a un niño ladrón llamado Dororo y viajan juntos por los campos en busca de los demonios que tienen las partes de Hyakkimaru. Durante sus viajes, enfrentan monstruos y fantasmas. Remake del clásico Dororo de Osamu Tezuka.",
    "category": ["Accion", "Aventura", "Demonios", "Historia", "Samurai", "Sobrenatural","Supervivencia"],
    "stock": 400,
    "price": 8.0
  },
    {
  "id": "85",
    "name": "Gintama",
    "img": "resources/img/products/Samurai/Gintama/Fotito.jpg",
    "descr": "Edo fue conquistada hace 20 años por los extraterrestres conocidos como «Amanto». Los samuráis, en ese entonces, se enfrentaron a ellos, perdiendo la guerra. Al tener el control de la Tierra, los Amanto prohibieron la portación de espadas llevando a los samuráis al borde de la extinción y de lamarginalidad. Gintoki Sakata, es un samurái con su propio bushido que realiza cualquier tipo de trabajos para poder sobrevivir en una época en la que los de su clase no son bienvenidos. Ayudado por un adolescente llamado Shinpachi Shimura, a quien conoció por inmiscuirlo en un ataque hacia un embajador Amanto; por una chica extraterrestre llamada Kagura, quien quiere cambiar su naturaleza asesina, y un animal extraño llamado Sadaharu, del que poco saben, forman la Yorozuya. Deberán lidiar con múltiples antagonistas y camaradas, mientras Edo continúa siendo sometida por los Amanto.",
    "category": ["Accion", "Comedia", "Ciencia Ficcion", "Samurai"],
    "stock": 750,
    "price": 7.50
  },
    {
  "id": "86",
    "name": "Kimetsu no Yaiba",
    "img": "resources/img/products/Samurai/Kimetsu_no_Yaiba/Fotito.jpg",
    "descr": "Tanjirou es el hijo mayor en una familia quien perdió a su padre. Un día, va de visita a otro pueblo para vender carbón, y termina quedándose a pasar la noche en la casa de un lugareño, ya que abunda elrumor de un demonio que ronda por las montañas por la noche. Cuando vuelve a casa al siguiente día, una tragedia lo estaba esperando.",
    "category": ["Accion", "Demonios", "Sobrenatural", "Aventura", "Fantasia", "Tragedia","Historia"],
    "stock": 1000,
    "price": 8.0
  },
    {
  "id": "87",
    "name": "D.Gray-Man",
    "img": "resources/img/products/Sobrenatural/D_Gray_Man/Fotito.png",
    "descr": "La historia se centra en el joven Allen Walker, un exorcista, durante un imaginario siglo XIX en Europa. Allen se convierte en miembro de la Orden Negra, una organización religiosa integrada por exorcistas de todo el mundo, la cual está vinculada al Vaticano. La misión de dicha organización es detener al Conde del Milenio, una malvada entidad demoníaca que pretende limpiar el mundo destruyendo a la humanidad, haciendo uso de sus armas llamadas Akuma. Los exorcistas son personas compatibles con la Inocencia, una sustancia divina creada en el pasado. Se dice que hay 109 trozos de Inocencia esparcidos por todo el mundo, una vez que la Inocencia encuentra a su persona compatible, evoluciona en un arma anti-Akuma. Esto se convierte en una carrera entre la Orden Negra y el Conde del milenio y sus aliados por conseguir la Inocencia.",
    "category": ["Accion", "Sobrenatural", "Aventura", "Comedia"],
    "stock": 450,
    "price": 8.0
  },
    {
  "id": "88",
    "name": "Enen no Shouboutai",
    "img": "resources/img/products/Sobrenatural/Enen_no_Shouboutai/Fotito.jpeg",
    "descr": "Un inexplicable fenómeno de gente que de forma misteriosa estalla en llamas asalta a la humanidad, Shinra Kusakabe, un chico que desea convertirse en héroe se une al escuadrón especial de bomberos con el fin salvar a la humanidad y de descubrir el misterio detrás de su pasado.",
    "category": ["Accion", "Comedia", "Sobrenatural", "Ciencia Ficcion", "Misterio", "Artes marciales"],
    "stock": 750,
    "price": 8.0
  },
    {
  "id": "89",
    "name": "Katekyo Hitman Reborn",
    "img": "resources/img/products/Sobrenatural/Katekyo_Hitman_Reborn/Fotito.jpg",
    "descr": "Katekyo Hitman Reborn! trata sobre Tsunayoshi Sawada, llamado Tsuna a secas, es un chico normal hasta que su pariente Timoteo (el 9º Jefe de la familia Vongola) le comunica que él va a ser su sucesor. Para que Tsuna este preparado para el momento en el que el sea el 10º Jefe, manda a su casa a un tutor personal llamado Reborn que le ayudara a ser un buen Jefe gracias a un arma especial de la familia Vongola, y que en ciertas ocasiones le ayudara a continuar su vida normal de una sola pieza. Luego aparecieran más personajes que le harán la vida más difícil y a la vez más divertida a Tsuna.",
    "category": ["Accion", "Aventura", "Comedia", "Drama", "Sobrenatural", "Vida escolar"],
    "stock": 450,
    "price": 7.50
  },
    {
  "id": "90",
    "name": "Boku no Hero Academia",
    "img": "resources/img/products/Superpoderes/Boku_no_Hero_Academia/Fotito.jpg",
    "descr": "La historia está ambientada en la época actual, excepto que las personas con poderes especiales se han vuelto comunes en todo el mundo. Un chico llamado Izuku Midoriya no tiene poderes, pero sueña tenerlos.",
    "category": ["Accion", "Comedia", "Vida escolar", "Superpoderes", "Ciencia Ficcion","Artes marciales"],
    "stock": 950,
    "price": 8.50
  },
    {
  "id": "91",
    "name": "Kill la Kill",
    "img": "resources/img/products/Superpoderes/Kill_la_Kill/Fotito.jpg",
    "descr": "Ryuuko Matoi es una chica que va a todos lados con una particular media tijera roja, buscando al portador de la otra media tijera, quien mató a su padre. El instituto Honouji es una escuela secundaria reinada por el miedo, impartido por el consejo estudiantil. Su presidente, Satsuki Kiryuuin, usa poderosos uniformes para acabar con cualquiera que se cruce en su camino. Tras que Ryuuko sufriese una aplastante derrota a manos de Satsuki, considera que llega la hora de empezar a usar un uniforme escolar poseído llamado Senketsu, que le otorga habilidades especiales. Es hora de que Ryuuko termine con la tiranía de Satsuki y el consejo estudiantil para no sólo liberar al instituto Honouji de su mano de hierro sino además descubrir la verdad detrás de la muerte de su padre.",
    "category": ["Accion", "Drama", "Artes marciales", "Comedia", "Ecchi", "Vida escolar", "Superpoderes"],
    "stock": 800,
    "price": 8.0
  },  {
  "id": "92",
    "name": "Sailor Moon",
    "img": "resources/img/products/Superpoderes/Sailor_Moon/Fotito.jpg",
    "descr": "Usagi Tsukino es una estudiante de segundo de secundaria que es un poco patosa y llorona, pero está repleta de energía. Un día conoce a Luna, una gata negra con una luna creciente en su frente, y se transforma en Sailor Moon, ¡la guardiana del amor y la justicia con traje de marinerito! Como una guardiana de la justicia, Usagi tendrá la misión de encontrar el Illusionary Silver Crystal con las otras guardianas y proteger a la princesa. Mientras tanto, la reina del Reino Oscuro, la Reina Beryl, también envía a sus esbirro al pueblo en el que vive Usagi para intentar conseguir el Illusionary Silver Crystal, el cual tiene un inmenso poder. Esto provoca que ocurran sucesos extraños… ¡¿Podrá Sailor Moon encontrar el Illusionary Silver Crystal con las otras guardianas Sailor y proteger a la princesa…?!",
    "category": ["Drama", "Fantasia", "Magia", "Romance", "Reencarnacion", "Superpoderes", "Comedia"],
    "stock": 950,
    "price": 9.50
  },  {
  "id": "93",
    "name": "Alice in Borderland",
    "img": "resources/img/products/Supervivencia/Alice_in_Borderland/Fotito.jpg",
    "descr": "Arisu Ryouhei dejará el instituto pronto, pero él trata de evitar pensar en su futuro. Una noche, cuando está con su compañero Karube y su amigo Chouta, ven unos fuegos artificiales. Después de una explosión cegadora, ellos se despiertan en otro mundo, llamado Borderland. Aquí la gente está obligada a participar en unos violentos juegos, donde los participantes deben luchar para sobrevivir. ¿Podrán Arisu, Karube y Chouta sobrevivir en este peligroso nuevo mundo y encontrar el camino de vuelta a su verdadero mundo?",
    "category": ["Accion", "Aventura", "Supervivencia", "Sobrenatural", "Misterio", "Psicologico"],
    "stock": 450,
    "price": 12.0
  },  {
  "id": "94",
    "name": "Dr. Stone",
    "img": "resources/img/products/Supervivencia/DrStone/Fotito.jpg",
    "descr": "Senkuu y Taiju son dos amigos y estudiantes de preparatoria, el primero de ellos es un genio del club de química mientras que el otro es un grandullón musculoso e idiota. Después de 5 largos años, Taiju ha decidido declararle su amor a Yuzuriha, pero no todo siempre sale como nos gustaría... En la tierra ocurre un suceso que convierte a todo el mundo en piedra. ¿Cómo lograrán sobrevivir en este mundo post apocalíptico?",
    "category": ["Accion", "Aventura", "Apocaliptico", "Comedia", "Supervivencia", "Misterio"],
    "stock": 1000,
    "price": 8.0
  },  {
  "id": "95",
    "name": "Shigenky no Kyojin",
    "img": "resources/img/products/Supervivencia/Shingeki_no_Kyojin/Fotito.jpg",
    "descr": "La historia gira en torno a Eren Jaeger, su hermana adoptiva Mikasa Ackerman y su amigo Armin Arlert. En este mundo, la población humana vive dentro de ciudades rodeadas de enormes muros para protegerse de la aparición de seres gigantescos que devoran personas, los titanes. Un día, el muro que protegía a la humanidad es atacado por un titán que sobrepaso a la muralla y el resto de los titanes logran invadir la ciudad. Tras el caos ocasionado, Eren pierde a su madre, así que una vez están a salvo, Eren, Mikasa y Armin deciden unirse al ejército y combatir a los titanes por sí mismos, en ese momento es donde Eren jura vengarse de todos los titanes, exterminándolos.",
    "category": ["Accion", "Sobrenatural", "Horror", "Misterio", "Tragedia", "Apocaliptico", "Superpoderes"],
    "stock": 1000,
    "price": 8.50
  },  {
  "id": "96",
    "name": "Black Bullet",
    "img": "resources/img/products/Thriller/Black_Bullet/Fotito.jpg",
    "descr": "Un futuro cercano, donde los seres humanos han sido derrotados por los parásitos llamados Gastrea. Ellos han estado en el exilio en un pequeño territorio y viven en la desesperación, de lado a lado en el terror. Rentaro, es un chico que vive cerca de Tokio y miembro de la Seguridad Ciudadana, una organización especializada en la lucha contra los Gastrea para llevar a cabo tareas peligrosas. Su compañero es Enju, una niña precoz. Luchan gracias a sus peculiares poderes hasta que un día, cuando reciben una asignación especial del gobierno. Esta misión de alto secreto es evitar la destrucción de Tokio...",
    "category": ["Accion", "Drama", "Misterio", "Psicologico", "Ciencia Ficcion", "Thriller", "Harem", "Tragedia" ],
    "stock": 500,
    "price": 8.0
  },  {
  "id": "97",
    "name": "Gangsta",
    "img": "resources/img/products/Thriller/Gangsta/Fotito.jpg",
    "descr": "Gangsta sigue la vida de dos gánsteres amistosos del barrio, Warwick Arcangelo y Nicolas Brown, y Alex Benedetto la ex prostituta, ahora convertida en secretaria. Conocidos como Benriya, se ganan la vida en las caóticas calles de Ergastulum como matones a sueldo.",
    "category": ["Accion", "Drama", "Thriller", "Tragedia"],
    "stock": 650,
    "price": 8.0
  },  {
  "id": "98",
    "name": "Shiki",
    "img": "resources/img/products/Thriller/Shiki/Fotito.jpg",
    "descr": "En Sotoba, un pequeño pueblo de unos 1300 habitantes, empiezan a ocurrir un gran número misteriosas muertes durante un verano particularmente caluroso, donde el único factor común de estas es una sensación de somnolencia además de la presencia de anemia de los aldeanos antes de morir. ¿qué suceso está detrás de estas muertes?.",
    "category": ["Rencuentros de la vida", "Sobrenatural", "Misterio", "Psicologico", "Thriller", "Tragedia"],
    "stock": 400,
    "price": 8.0
  },  {
  "id": "99",
    "name": "Bastard",
    "img": "resources/img/products/Tragedia/Bastard/Fotito.jpg",
    "descr": "Han pasado 15 años desde aquel momento donde Dark Schneider junto a sus compañeros Gara, Karls y Arshes Nei trataran de conquistar el mundo, pero a pesar de haberse apoderado de casi todo el mundo, fueron derrotados por los guerreros y sacerdotes del reino de Metallicana y Dark Schneider fue encerrado por un sacerdote de nombre Geo en el cuerpo de un recién nacido de nombre Rushe Ren Ren. 15 años después los antiguos compañeros de Dark Schneider se reunieron nuevamente con el propósito de conquistar el mundo, pero esta vez no están liderados por Schneider, sino por un sacerdote de nombre Abigail. Metallicana, uno de los 4 reinos de Metallion, estaba siendo atacada y con la ausencia del rey parece no quedar esperanzas, pero el gran sacerdote Geo le pide a su hija Yoko algo muy arriesgado: que resucite a Schneider. La forma de resucitarlo era que Rushe, el hermanastro de Yoko, recibiera el beso de una sacerdotisa virgen. Yoko era virgen, y después de que Rushe recibiera el beso de Yoko, Schneider despierta y se le ve más cruel y malvado que antes, de forma que vence rápidamente a los enemigos del reino, pero al parecer ya no es el mismo ya que ha desarrollado un lado bueno. Después de enterarse que sus antiguos compañeros planean resucitar a Anthrathrax, la antigua diosa de la destrucción, Schneider decide unirse al reino de Metallicana no por afan de justicia o sentido del bien, sino por que el amor de Rushe por Yoko es tan grande que ha contagiado a Schneider, quien se ha enamorado de ella y se ha fijado como meta su protección y una futura relación con ella.",
    "category": ["Accion", "Demonios", "Ecchi", "Fantasia", "Horror", "Tragedia", "Harem"],
    "stock": 450,
    "price": 8.0
  },  {
  "id": "100",
    "name": "Strike the Blood",
    "img": "resources/img/products/Tragedia/Strike_the_Blood/Fotito.jpg",
    "descr": "El cuarto vampiro pura sangre, Kojou Akatsuki, uno de los cuatro vampiros progenitores y más poderosos,lleva una vida adolescente normal, hasta que la Agencia Lion King entra en acción, mandando a Yukina Himeragi para vigilar y exterminar a Kojou en caso de que este represente una amenaza. El cuarto progenitor es algo que no debería existir en este mundo. Yukina determinara el destino del cuarto vampiro, ¿Sobrevivencia o exterminio?...",
    "category": ["Accion", "Ecchi", "Sobrenatural", "Harem", "Tragedia", "Vampiros", "Ciencia Ficcion"],
    "stock": 850,
    "price": 8.50
  },
    {
  "id": "101",
    "name": "Uzumaki",
    "img": "resources/img/products/Tragedia/Uzumaki/Fotito.jpg",
    "descr": "En el pueblo de Kirie suceden cosas raras desde que el padre de su novio (Shuichi) se obsesiono con las espirales, eso debe relacionarse con los muertos que vuelven ala vida, las mujeres embarazadas que necesitan beber sangre fresca para dar a luz a sus hijos, las extrañas mutaciones de los estudiantes convirtiéndolos en enormes caracoles, o que a cada persona que cremen del pueblo su humo forme una gran espiral en el cielo y termine hundiéndose en el misterioso lago de la libélula en medio del pueblo.",
    "category": ["Drama", "Sobrenatural", "Horror", "Misterio", "Tragedia"],
    "stock": 850,
    "price": 20.0
  },
    {
  "id": "102",
    "name": "Owari no Seraph",
    "img": "resources/img/products/Vampiros/Owari_no_Seraph/Fotito.jpeg",
    "descr": "La historia tiene lugar en un mundo donde un virus ha asolado a toda la humanidad a excepción de los niños, que fueron esclavizados por vampiros. El manga gira en torno a Yuichiro Hyakuya, un esclavo humano que sueña con hacerse lo suficientemente fuerte como para exterminar a los vampiros.",
    "category": ["Accion", "Sobrenatural", "Aventura", "Ciencia Ficcion", "Vampiros", "Romance", "Superpoderes"],
    "stock": 1000,
    "price": 8.50
  },  {
  "id": "103",
    "name": "Rosario to Vampire",
    "img": "resources/img/products/Vampiros/Rosario_to_Vampire/Fotito.jpg",
    "descr": "Aono Tsukune tiene tanta suerte que ni siquiera puede ser admitido en la escuela secundaria. Sus padres finalmente le encontraron una escuela sin exámenes requeridos para la admisión, en medio de la nada. Se entera de que la escuela es una academia de youkai (monstruos). Justo cuando está a punto de resignarse y regresar al autobús a casa, se encuentra con una hermosa chica. Resulta que esta hermosa chica, Akashiya Moka, también es un vampiro que lo muerde desde el principio. Se hacen amigos y Tsukune está listo para una vida escolar feliz con ella, hasta que descubre que si encuentran a un humano en los terrenos de la escuela, debe ser asesinado. Ahora Tsukune debe ocultar su identidad al resto de los monstruos de la escuela, mientras que al mismo tiempo es un bocadillo listo para Moka siempre que el impulso la tome. ¿Qué efecto tendrá esto en Tsukune y podrá Moka mantenerlo fuera de peligro?",
    "category": ["Comedia", "Sobrenatural", "Vampiros", "Harem", "Accion", "Drama", "Fantasia", "Romance"],
    "stock": 750,
    "price": 9.0
  },  {
  "id": "104",
    "name": "Vanitas no carte",
    "img": "resources/img/products/Vampiros/Vanitas_no_Carte/Fotito.jpg",
    "descr": "Europa, siglo XIX. Una época dónde aumentan los avistamientos de vampiros y cada día se reportan más casos de muertes extrañas. Noé, uno de ellos, va a París en busca de una gran leyenda, Vanitas ¿Pero quien es él y que secretos y conjuros oculta en su Grimorio…? ¿Y por qué razón le pide a Noé ser su colega?",
    "category": ["Comedia", "Fantasia", "Sobrenatural", "Magia", "Romance", "Drama", "Vampiros", "Misterio"],
    "stock": 1000,
    "price": 8.50
  },  {
  "id": "105",
    "name": "Blue Period",
    "img": "resources/img/products/Vida_Escolar/Blue_Period/Fotito.jpg",
    "descr": "Yataro Yaguchi finalmente encuentra una vocación en el arte, sin experiencia previa en la técnica, decide trabajar para postularse a una universidad de arte, si antes saber lo difícil que puede ser la realidad.",
    "category": ["Drama", "Vida escolar", "Misterio", "Rencuentros de la vida"],
    "stock": 800,
    "price": 8.0
  },
    {
  "id": "106",
    "name": "Orange",
    "img": "resources/img/products/Vida_Escolar/Orange/Fotito.jpg",
    "descr": "Naho Takamiya, una estudiante de secundaria, recibe una carta escrita de sí misma de diez años en el futuro. Naho lee en la carta que recita los hechos exactos del día, incluyendo la transferencia de un nuevo estudiante en su clase llamado Naruse Kakeru. La Naho de diez años más tarde afirma repetidamente que ella tiene muchos remordimientos, y quiere solucionar estos asegurándose de que el Naho del pasado puede hacer las decisiones correctas, sobre todo en relación con Kakeru. Lo que es más sorprendente es que ella descubre que diez años más tarde, Kakeru ya no estará con ellos y la futura Naho le pide velar por él.",
    "category": ["Drama", "Rencuentos de la vida", "Romance", "Tragedia", "Vida escolar", "Ciencia Ficcion"],
    "stock": 850,
    "price": 8.0
  },
    {
  "id": "107",
    "name": "Special A",
    "img": "resources/img/products/Vida_Escolar/Special_A/Fotito.jpg",
    "descr": "Hikari Hanazono siempre ha sido segundo a Kei Takishima. Cuando tenía seis años de edad, sus pro-wrestling padres amorosos ellos introdujeron el uno al otro. Suponiendo que ella era la mejor en la lucha libre, joven Hikari Kei retó a un combate de lucha libre sólo para ser derrotado a fondo por él. Desde ese fatídico incidente, Hikari juró vencer a Kei en los grados escolares, eventos deportivos - nada. Para ello, se ha inscrito en la misma escuela que Kei desde elemental. Ahora ella asiste Hakusenkan, una escuela de élite de ultra, que cuesta a su padre carpintero mucho dinero. Hikari y Kei son los dos mejores estudiantes en la escuela, con Kei sosteniendo firmemente a esa posición número uno. Mientras Hikari Kei considera ser un amigo rival e importante, que es completamente inconsciente de que Kei la ama. La historia se centra principalmente en Hikari y sus constantes intentos de derrotar a su único rival, Kei, y cómo ella encuentra el amor en su rivalidad.",
    "category": ["Comedia", "Romance", "Vida escolar", "Artes marciales"],
    "stock": 450,
    "price": 8.0
  },  
  {
  "id": "108",
    "name": "Sasaki to Miyano",
    "img": "resources/img/products/Yaoi/Sasaki_to_Miyano/Fotito.jpg",
    "descr": "Miyano es un estudiante de secundaria con un secreto: es un fanboy del BL. Es un apasionado de su hobby, pero no lo comparte con otros fácilmente, hasta que un encuentro casual con un sempai peculiar llamado Sasaki trae una nueva amistad. Sasaki no sabe qué diablos es un seme o uke, o por qué debería estar preocupado cuando Miyano amenaza con hacer un doujinshi que lo involucre, ¡pero está ansioso por aprender sobre el pasatiempo de su nuevo amigo!.",
    "category": ["Yaoi", "Vida escolar", "Rencuentros de la vida", "Romance"],
    "stock": 850,
    "price": 8.0
  },
  {
  "id": "109",
    "name": "Super Lovers",
    "img": "resources/img/products/Yaoi/Super_Lovers/Fotito.jpg",
    "descr": "La historia de Super Lovers está protagonizada por un estudiante de secundaria llamado Haru. Su madre, que vive en el extranjero, le ordena cuidar y “civilizar” a Ren, su hermano adoptivo y agresivo al que no le gusta hablar con otras personas. A pesar de que al principio su relación es complicada, con el tiempo se harán más cercanos y se entenderán el uno al otro.",
    "category": ["Comedia", "Drama", "Romance", "Vida escolar", "Rencuentros de la vida", "Yaoi"],
    "stock": 1000,
    "price": 8.50
  },
    {
  "id": "110",
    "name": "Ten count",
    "img": "resources/img/products/Yaoi/Ten_Count/Fotito.jpg",
    "descr": "Tadaomi Shirotani es un joven hombre que sufre de misofobia, por lo que intenta evitar entrar en contacto con la suciedad y los gérmenes. Un día, su camino se cruza con el de Riku Kurose, un psiquiatra que tras contemplar la gravedad de su caso se empecina en curarlo y librarlo de su fobia, una obsesión que atormenta cada aspecto de su vida cotidiana. Shirotani decide aceptar la oferta y comienza su terapia con Kurose, sin saber que su relación pronto se profundizará a una mucho más íntima que la de doctor y paciente. A medida que su relación con Kurose avanza, Shirotani deberá lidiar con su conflictivos sentimientos y enfrentar sus temores.",
    "category": ["Drama", "Yaoi", "Rencuentros de la vida", "Psicologico", "Romance"],
    "stock": 550,
    "price": 8.0
  },
     {
  "id": "111",
    "name": "Citrus",
    "img": "resources/img/products/Yuri/Citrus/Fotito.jpg",
    "descr": "Yuzu imaginó el primer día en su nueva escuela se trasladó a un nuevo matrimonio después de su madre un poco diferente; ella no sabía que sería una escuela de ultra-estrictos y conservadores de las niñas. Así que en lugar de un romance dulce de alta escuela, se da golpes con la cabeza con la popa presidente del consejo estudiantil Mei-que resulta ser su nueva hermana paso. Y ella tiene que aprender que el odio y la atracción a menudo no son tan distantes.",
    "category": ["Drama", "Romace", "Vida escolar", "Yuri"],
    "stock": 1000,
    "price": 8.50
  },
     {
  "id": "112",
    "name": "Demi life!",
    "img": "resources/img/products/Yuri/Demi_Life/Fotito.jpg",
    "descr": "¿Azuma Manaka se matriculó en una escuela llena de demis? Ella estará aprendiendo a lo largo de ellos. Además, ¿el dormitorio de Inari en el que vivirá está lleno de chicas semi ?! Rodeada de chicas excéntricas, su vida escolar acaba de comenzar. Todos somos diferentes y eso está bien. ¡La vida de Manaka con los demis está comenzando!",
    "category": ["Comedia", "Rencuentros de la vida", "Sobrenatural", "Yuri"],
    "stock": 500,
    "price": 8.0
  },
     {
  "id": "113",
    "name": "Sakura Trick",
    "img": "resources/img/products/Yuri/Sakura_Trick/Fotito.jpg",
    "descr": "Takayama Haruka y Sonoda Yuu eran dos amigas inseparables en la secundaria, pero al entrar en la preparatoria se sientan lejos una de la otra en su clase (esto es debido al orden alfabético) y tienen que pasar tiempo con otras amigas durante la clase, por lo que deciden tener una relación especial besándose en secreto.",
    "category": ["Comedia", "Rencuentros de la vida", "Romance", "Vida escolar", "Yuri"],
    "stock": 850,
    "price": 8.50
  },
    {
  "id": "114",
    "name": "Blue Lock",
    "img": "resources/img/products/Deporte/Blue_Lock/Fotito.jpg",
    "descr": "El delantero Yoichi Isagi perdió la oportunidad de ir al campeonato nacional de escuelas secundarias porque pasó el balón a su compañero de equipo, quien desperdicio la oportunidad de anotar, en lugar de disparar él mismo encontrandose en una mejor posición. Isagi es uno de los 300 delanteros sub-18 elegidos por Jinpachi Ego, un hombre contratado por la Asociación de Fútbol de Japón después de la Copa Mundial de la FIFA 2018, para guiar a Japón a ganar la Copa del Mundo al destruir el fútbol japonés. El plan de Ego es aislar a los 300 delanteros en una institución similar a una prisión llamada Blue Lock, con el fin de crear el egoism/delantero más grande del mundo, que ha faltado en el fútbol japonés.",
    "category": ["Deporte", "Accion", "Drama", "Psicologico", "Supervivencia"],
    "stock": 200,
    "price": 8.00
  },
    {
  "id": "115",
    "name": "Haikyuu",
    "img": "resources/img/products/Deporte/Haikyuu/Fotito.jpg",
    "descr": "Un hecho fortuito desencadena el amor de Shouyou Hinata por el voleibol. Su club no tenía ningún miembro, pero de alguna manera perseveró y finalmente pudo estrenarse en su primer y último partido regular de la escuela secundaria, donde fue arrollado por Tobio Kageyama, un jugador estrella conocido como El Rey de la Cancha. Jurando venganza, Hinata se une al Club de Voleibol de la Preparatoria Karasuno... sólo para encontrarse cara a cara con su odiado rival, Kageyama!",
    "category": ["Comedia", "Drama", "Rencuentros de la vida", "Deporte", "Vida escolar"],
    "stock": 1500,
    "price": 8.00
  },
    {
  "id": "116",
    "name": "Yuri on Ice",
    "img": "resources/img/products/Deporte/Yuri_on_Ice/Fotito.jpg",
    "descr": "Yuri Katsuki es un patinador artístico que, asumiendo las expectativas de todo Japón, experimentó una derrota aplastante en la final de Gran Prix. Con esto, él vuelve a su ciudad natal en Kyushu. Medio queriendo continuar con el patinaje y medio queriendo retirarse, Yuri se ha refugiado en la casa de su familia. Es entonces cuando Víctor Nikiforov, el campeón mundial en cinco ocasiones, se le acerca de repente ... Yuri Katsuki, un patinador japonés en el borde. Yuri Plisetsky, un joven patinador ruso que domina a sus competidores de alto nivel. Estos dos Yuris, junto con el actual campeón Víctor Nikiforov, ¡están a punto de entrar en un incomparable Gran Prix de patinaje artístico!",
    "category": ["Comedia", "Romance", "Deporte"],
    "stock": 150,
    "price": 8.00
  }
]};
var products_json = JSON.stringify(json);
var obj = JSON.parse(products_json);

/**
 * Check if the "myCart" key exists on the LocalStorage, if not it is created and set to []
 */
function _init_() {
  if(localStorage.getItem("myCart") == null) {
    var cart = [];
    localStorage.setItem("myCart", JSON.stringify(cart));
  }
}
/**
 * Used in "index.html"
 * Calls _init_(), creates an array of 5 different integers from 1 to 116, and adds to the elem whose id is "#products" 
 */
 function showRndProd() {
  _init_();
  var product = '';
  const rnd = [];
  while (rnd.length < 5) {
      var r = Math.floor(Math.random()*116);
      if(rnd.indexOf(r) === -1) rnd.push(r);
  }
  for(var i = 0; i < 5; i++) {
      try {
        product += '<div class="singlePr"><a href="products.html?data-id='+ obj.mangas[rnd[i]].id +'">';
        product += '<div class="prodImg"><img src="' + obj.mangas[rnd[i]].img + '" alt="img' + obj.mangas[rnd[i]].id + '"></div>';
        product += '<div class="prodText"><h3>' + obj.mangas[rnd[i]].name + '</h3><br>';
        product += '<p class="price">' + obj.mangas[rnd[i]].price + ' €</p></div></a>';
        product += '<p><button type="button" aria-label="add-cart" onclick="add2Cart('+ obj.mangas[rnd[i]].id +')"></button></p></div>';
      } catch(e) {
        console.log("[ERROR]: cannot access to index " + rnd[i]);
      }
  }
  document.getElementById("#products").innerHTML = product;
}
/**
 * Used in "products.html"
 * It includes a header that changes as the url and its added to the elem whose id is "products"
 * Checks if the url contains "data-id", "category" or nothing:
 *    - data-id=N: Calls showProd(id=N)
 *    - category=Category: Calls showCategory(category=Category)
 *    - nothing: Calls showAll()
 */
 function choose() {
  var data = 'data-id';
  var category = 'category';
  var url = window.location.href;
  var p = new URL(url);
  var header = '<div class="title"><h1>Productos</h1></div><div id="#products" class="products"></div>';
  if(url.indexOf('?' + data + '=') != -1){
    showProd(p.searchParams.get(data));
  } else if(url.indexOf('?' + category + '=') != -1) {
    header = '<div class="title"><h1>'+ p.searchParams.get(category) +'</h1></div><div id="#products" class="products"></div>';
    document.getElementById('products').innerHTML = header;
    showCategory(p.searchParams.get(category));
  }
  else {
    document.getElementById('products').innerHTML = header;
    showAll();
  }
}
/**
 * Shows an ordered list of the 116 products of the JSON, and adds it to elem whose id is "#products"
 */
function showAll() {
  var product = '';
  var i;
  for(i = 0; i < obj.mangas.length; i++) {
    try {
      product += '<div class="singlePr"><a href="products.html?data-id='+ obj.mangas[i].id +'">';
      product += '<div class="prodImg"><img src="' + obj.mangas[i].img + '" alt="img' + obj.mangas[i].id + '"></div>';
      product += '<div class="prodText"><h3>' + obj.mangas[i].name + '</h3><br>';
      product += '<p class="price">' + obj.mangas[i].price + ' €</p></div></a>';
      product += '<p><button type="button" aria-label="add-cart" onclick="add2Cart('+ obj.mangas[i].id +')"></button></p></div>';
    } catch(e) {
      console.log("[ERROR]: cannot access to index " + i);
    }
  }
  document.getElementById("#products").innerHTML = product;
}
/**
 * Shows the hole information of the product whose id={param:id}
 * @param {number} id Thats the id of the product
 */
function showProd(id) {
  var product = '<div class="left"><img src="'+ obj.mangas[id-1].img +'" alt="img'+ obj.mangas[id-1].id +'"></div>';
  document.getElementById('products').classList.add('flex-w9');
  product += '<div class="product-text"><div class="title"><h1>'+ obj.mangas[id-1].name +'</h1></div><div class="price">'+ obj.mangas[id-1].price +'€</div>';
  product += '<div class="genres"><ul>';
  for(var i = 0; i < obj.mangas[id-1].category.length; i++) {
    product += '<li><a href="products.html?category='+ obj.mangas[id-1].category[i] +'">'+ obj.mangas[id-1].category[i] +'</a></li>'
  }
  product += '</ul></div>';
  product += '<div class="desc"><p>'+ obj.mangas[id-1].descr +'</p></div>';
  product += '<div class="prod-btn"><button type="button" aria-label="add-cart" onclick="add2Cart('+obj.mangas[id-1].id+')">Añadir al carrito</button></div></div>';
  document.getElementById('products').innerHTML = product;
}
/**
 * Shows list of the products whose category array includes {param:category}
 * @param {string} category Thats the category is gonna search for
 */
function showCategory(category) {
  try {
    var list = obj.mangas.filter(elem => {
      return elem.category.includes(category);
    });
    var product = '';
    list.forEach(elem => {
      product += '<div class="singlePr"><a href="products.html?data-id='+ elem.id +'">';
      product += '<div class="prodImg"><img src="' + elem.img + '" alt="img' + elem.id + '"></div>';
      product += '<div class="prodText"><h3>' + elem.name + '</h3><br>';
      product += '<p class="price">' + elem.price + ' €</p></div></a>';
      product += '<p><button type="button" aria-label="add-cart" onclick="add2Cart('+elem.id+')"></button></p></div>';
    });
    document.getElementById("#products").innerHTML = product;
  } catch(e) {
    alert('Something went wrong showing a category product');
  }
}
/**
 * Used on every single product
 * Adds to "myCart" the product info {name, price, img} on the position (id-1), does not allow multiple adds because its overrides the info
 * @param {number} id Thats the id of the product 
 */
function add2Cart(id) {
  var cart = JSON.parse(localStorage.getItem("myCart"));
  var name = obj.mangas[id-1].name;
  var price = obj.mangas[id-1].price;
  var img = obj.mangas[id-1].img;
  cart[id-1] = {name, price, img};
  alert(name + ' añadido al carrito');
  localStorage.setItem("myCart", JSON.stringify(cart));
}
/**
 * Shows on console the "myCart" array
 */
function getCart() {
  try {
    var test = localStorage.getItem("myCart");
    console.log(test);
  } catch (e) {
    console.log("The cart doesnt exists");
  }
}
/**
 * Sets to "null" the "myCart" array position (id-1), only if its not null
 * @param {number} id 
 */
function removeCart(id) {
  var storage = JSON.parse(localStorage.getItem("myCart"));
  if(storage[id-1] != null) {
    storage[id-1] = null;
  }
  localStorage.setItem("myCart", JSON.stringify(storage));
  showCart();
}
/**
 * Displays the "myCart" info on "cart.html"
 */
function showCart() {
  var exists = '<li><h3>El carrito no existe</h3></li>';
  var empty = '<li><h3>Carrito vacio</h3></li>';
  var storage = JSON.parse(localStorage.getItem("myCart"));
  if(storage == null) {
    document.getElementById('#cart').innerHTML = exists;
  } else {
    var cart_elem = '';
    var cart_ticket = '<ul>';
    var total = 0;
    for(var i = 0; i < storage.length; i++) {
      if(storage[i] != null) {
        /* Elements list */
        cart_elem += '<li class="bar">';
        cart_elem += '<button class="removeBtn" type="button" aria-label="remove-button" onclick="removeCart('+ (i+1) +')">×</button>';
        cart_elem += '<img class="bar-item" src="'+ storage[i].img +'" alt="img"'+ (i+1) +'>';
        cart_elem += '<span class="bar-item p1rem">' + storage[i].name + '</span>';
        cart_elem += '<span class="bar-item price p1rem">' + storage[i].price + '€</span>';
        cart_elem += '</li>';
        /* Total price */
        total += storage[i].price;
        /* Price list */
        cart_ticket += '<li>+' + storage[i].price + '€</li>'
      }
    } 
    if (cart_elem === '') {
      document.getElementById('#cart').innerHTML = empty;
    } else {
      document.getElementById('#cart').innerHTML = cart_elem;
    }
    cart_ticket += '</ul>';
    document.getElementById('#ticket').innerHTML = cart_ticket;
    document.getElementById('total').innerHTML = total;
  }
}
/**
 * Used in "orders.html"
 * Gets total price that accumulates the cart
 */
function getTotal() {
  var storage = JSON.parse(localStorage.getItem("myCart"));
  var total = 0;
  storage.forEach(elem => {
    if(elem != null){
      total+=elem.price;
    }
  });
  var TOTAL = "Importe total: " + total + "€";
  document.getElementById("#price").innerHTML = TOTAL;
}