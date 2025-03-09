export const metadata = {
  title: "Règlement - Bike&Run",
};

export default function Reglement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Règlement Bike & Run Xtreme - Forum des Télécommunications
      </h1>

      <div id="article-1" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 1 - Organisation
        </h2>
        <p className="text-gray-700">
          La première édition du Bike & Run co-organisé par le club Xtreme de
          l’Association Sportive de l’Institut National de Télécommunications
          (ASINT) et Forum des Télécommunications se déroulera le 10 avril 2025.
        </p>
        <p className="text-gray-700">
          L’évènement est composé des épreuves suivantes :
        </p>
        <ul className="text-gray-700">
          <li id="epreuve-decouverte">Course Bike & Run “découverte” 7 km</li>
          <li id="epreuve-avance">Course Bike & Run “avancé” 15 km</li>
        </ul>
        <p className="text-gray-700">
          Les courses et concours sont ouverts à tous les étudiants licenciés ou
          non, âgés de plus de 18 ans le jour de la course.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 2 - Inscriptions
        </h2>
        <p className="text-gray-700">
          Les inscriptions aux 2 courses se font en ligne sur la plateforme
          HelloAsso dans la limite des places disponibles. Les places pourront
          être prises sur place le 10 avril 2025 dans la limite des places
          disponibles.
        </p>
        <p className="text-gray-700">
          Le nombre de places est limité par le nombre de vélos pouvant être
          prêtés, dans la limite de 300 inscriptions.
        </p>
        <p className="text-gray-700">
          Les droits d’inscriptions pour les étudiants sont de 5€ pour chacune
          des courses. Les 2 membres de l’équipe doivent être inscrits (voir
          Article 5 pour la constitution des équipes).
        </p>
        <p className="text-gray-700">
          Toute inscription est définitive et nominative, elle ne pourra être
          transférée à un autre participant, elle ne pourra ni être revendue ni
          remboursée. Les places pourront être remboursées pour raisons
          médicales, uniquement sur présentation d’un certificat médical valide
          jusqu’à une semaine avant la course soit jusqu’au 3 avril.
        </p>
        <p className="text-gray-700">
          En s’inscrivant à l’évènement, le participant accepte pleinement le
          règlement.
        </p>
        <p className="text-gray-700">
          Chaque participant doit transférer à l’organisation de la course l’un
          des documents suivants :
        </p>
        <ul className="text-gray-700">
          <li id="document-certificat-medical">
            Un certificat médical de non contre-indication à la pratique de la
            course à pied et du vélo en compétition de moins d’un an le jour de
            la course.
          </li>
          <li id="document-licence-ffsu">
            Une licence FFSU triathlon et sports enchaînés valide le jour de la
            course.
          </li>
          <li id="document-questionnaire-sante">
            Un Questionnaire de santé QS-SPORT visant à détecter de potentielles
            contre-indications à la pratique sportive.
          </li>
        </ul>
        <p className="text-gray-700">
          <a
            href="https://formulaires.service-public.fr/gf/cerfa_15699.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            formulaires.service-public.fr/gf/cerfa_15699.do
          </a>
        </p>
        <p className="text-gray-700">
          Ce document doit être transmis soit lors de l’inscription sur la
          plateforme HelloAsso, soit par mail à
          <a href="mailto:makessa.kone@telecom-sudparis.eu">
            makessa.kone@telecom-sudparis.eu
          </a>{" "}
          au plus tard le 9 avril 2025.
        </p>
        <p className="text-gray-700">
          Une équipe dont l’un des membres n’a pas transmis ce document ne
          pourra prendre le départ de la course.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 3 - Retrait des dossards
        </h2>
        <p className="text-gray-700">
          Le retrait des dossards se fera le jour de la course, le 10 avril
          2025, jusqu’à 30 minutes avant le départ, soit jusqu’à 13h30, sur le
          campus de Télécom SudParis et de l’Institut Mines Télécom Business
          School. Un coureur par équipe doit retirer le pack de dossard
          contenant une plaquette pour le vélo se plaçant sur le guidon, les
          étiquettes pour le casque se plaçant de chaque côté du casque des 2
          coureurs ainsi qu’un dossard avec une puce que doit porter l’un des 2
          coureurs.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 4 - Consignes pour les courses
        </h2>
        <p className="text-gray-700">
          Les équipes sont formées d’un binôme (voir Article 5).
        </p>
        <p className="text-gray-700">
          Les points suivants concernant le déroulement de la compétition sont à
          respecter, leur non-respect par un concurrent entraîne soit des
          pénalités soit une élimination de l'entièreté de l’équipe.
        </p>
        <ul className="text-gray-700">
          <li id="regles-securite">
            Les règles de sécurité à respecter sont spécifiées dans l’article 10
            et doivent être respectées sous peine de pénalités ou d’élimination.
          </li>
          <li id="penalites">
            À la première infraction constatée d’un binôme, 5 minutes de
            pénalité seront ajoutées au temps de course. À la deuxième
            infraction, le binôme sera mis hors course. Les pénalités seront
            appliquées par l’organisateur.
          </li>
          <li id="verification-carte">
            Les étudiants doivent être en capacité de montrer leur carte
            étudiante en arrivant sur le campus.
          </li>
          <li id="depart">Le déroulé du départ est décrit dans l’Article 9.</li>
          <li id="chrono-points-controle">
            La compétition est chronométrée et des points de contrôle peuvent
            être présents sur le parcours (voir Article 7).
          </li>
          <li id="port-dossards">Le port des dossards est obligatoire.</li>
          <li id="distance-binome">
            Les 2 membres de l’équipe doivent être groupés avec le vélo pendant
            la durée totale de la course, un écart de 20 mètres est toléré.
          </li>
          <li id="changement-position">
            Le changement de position entre le coureur et le cycliste doit être
            fait main à main.
          </li>
          <li id="contact-velo">
            Le vélo ne doit jamais être lâché, il doit en permanence être en
            contact avec au minimum un concurrent.
          </li>
          <li id="un-seul-sur-velo">
            Un seul concurrent est autorisé sur le vélo simultanément.
          </li>
          <li id="arrivee-equipe">
            Les 2 concurrents doivent franchir la ligne d’arrivée avec le vélo
            pour que l’équipe soit classée.
          </li>
          <li id="frequence-changement">
            Les équipes choisissent quand le changement de position est effectué
            tant qu’il respecte les consignes précédentes et ce autant de fois
            que voulu.
          </li>
          <li id="accident-mecanique">
            En cas d’accident mécanique se produisant lors de la course,
            l’équipe doit finir la course avec le vélo en course ou bien
            abandonner la compétition (voir Article 13), le vélo ne peut être
            abandonné.
          </li>
          <li id="sanctions">
            Le non-respect de ces consignes entraînera des pénalités ou
            l’élimination de l’équipe.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 5 - Formation des équipes
        </h2>
        <p className="text-gray-700">
          La formation des équipes se fait de l’une des manières suivantes :
        </p>
        <ul className="text-gray-700">
          <li id="formation-equipe-personne-specifique">
            Pour former une équipe avec une personne en particulier, ceci se
            fait sur le formulaire d’inscription sur HelloAsso où les 2 membres
            de l’équipe doivent le mentionner.
          </li>
          <li id="formation-equipe-entreprise">
            Pour constituer une équipe incluant un membre d’une entreprise,
            veuillez l’indiquer sur le formulaire d’inscription. L’organisation
            se charge de former l’équipe en tenant compte au mieux des objectifs
            sportifs des deux participants, dans la limite du nombre d’inscrits.
          </li>
          <li id="formation-equipe-etudiant">
            Pour constituer une équipe avec un autre étudiant, veuillez
            l’indiquer sur le formulaire d’inscription. L’organisation se charge
            de former l’équipe en tenant compte au mieux des objectifs sportifs
            des deux participants dans la limite du nombre d'inscrits.
          </li>
        </ul>
        <p className="text-gray-700">
          La formation d’une équipe est définitive.
        </p>
        <p className="text-gray-700">
          En cas de désistement d’un participant de l’équipe pour raison
          médicale, en présentant un certificat médical, le second participant
          pourra être assigné à une nouvelle équipe sur demande à <span></span>
          <a href="mailto:makessa.kone@telecom-sudparis.eu">
            makessa.kone@telecom-sudparis.eu
          </a>
          .
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 6 - Récompenses</h2>
        <p className="text-gray-700">
          L’ensemble des participants recevra des récompenses lors de l’arrivée.
        </p>
        <p className="text-gray-700">
          L’ensemble des récompenses suivantes se feront sous forme de bon
          d’achat.
        </p>
        <p className="text-gray-700">
          Les positions suivantes seront récompensées :
        </p>

        <ul className="text-gray-700">
          <li id="recompense-courses"><br></br></li>
          <ul>
            <li id="recompense-decouverte">Récompense parcours “Découverte”</li>
            <ul>
              <li id="decouverte-top3-mixte">
                3 premiers mixte étudiant-entreprise
              </li>
              <li id="decouverte-feminine">1ère équipe Féminine</li>
              <li id="decouverte-masculine">1ère équipe Masculine</li>
              <li id="decouverte-mixte-hf">1ère équipe mixte Homme-Femme</li>
            </ul>
            <li id="recompense-avance">Récompense parcours “Avancé”</li>
            <ul>
              <li id="avance-top3-mixte">
                3 premiers mixte étudiant-entreprise
              </li>
              <li id="avance-feminine">1ère équipe Féminine</li>
              <li id="avance-masculine">1ère équipe Masculine</li>
              <li id="avance-mixte-hf">1ère équipe mixte Homme-Femme</li>
            </ul>
          </ul>

          <li id="recompense-concours">Récompenses pour les Concours</li>
          <ul>
            <li id="concours-pompom">Récompense concours Pom Pom girls</li>
            <ul>
              <li id="pompom-1ere">1ère équipe</li>
              <li id="pompom-2eme">2ème équipe</li>
              <li id="pompom-3eme">3ème équipe</li>
            </ul>
            <li id="concours-mascotte">Récompense concours mascotte</li>
            <ul>
              <li id="mascotte-1er">1er</li>
            </ul>
          </ul>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 7 - Chronométrage
        </h2>
        <p className="text-gray-700">
          Le chronométrage est réalisé avec des puces électroniques présentes
          sur le dossard. Des points de passage obligatoire peuvent être ajoutés
          sur le parcours pour vérifier le respect du parcours par les
          concurrents. Un chronométrage manuel sera fait en supplément et les
          concurrents devront par conséquent rendre leur dossard dès leur
          arrivée.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 8 - Responsabilité
        </h2>
        <p className="text-gray-700">
          L’organisateur a souscrit à une assurance responsabilité civile. Les
          concurrents sont responsables du vélo leur étant prêté par
          l’organisation, tout dégât sur le vélo sera facturé à l'équipe.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 9 - Départ</h2>
        <p className="text-gray-700">
          Article 9 - Départ Le départ est prévu à 14h00 pour la course sur le
          parcours “Avancé” de 15km, et à 14h05 pour la course sur le parcours
          “Découverte”. Le départ se fera sur le campus de Télécom SudParis et
          de l’Institut Mines Télécom Business School. La procédure de départ
          est la suivante pour les 2 courses : Les coureurs à pied effectuent
          d'abord une boucle de 400 mètres. À la fin de cette boucle, les vélos
          doivent être stationnés dans la zone bleue, avec l’autre membre du
          binôme attendant l’arrivée du coéquipier. Une fois l’équipe réunie,
          celle-ci doit franchir la ligne de départ ensemble, en tenant le vélo
          à la main. Dès que la ligne de départ est passée, l’utilisation du
          vélo est autorisée.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 10 - Sécurité </h2>
        <p className="text-gray-700">
          Un ou plusieurs "ouvreurs" seront en tête de file pour ouvrir la
          course.
        </p>
        <p className="text-gray-700">
          Chaque concurrent devra obligatoirement veiller à sa propre sécurité
          ainsi que celle d’autrui, les consignes de sécurité seront à retrouver
          dans le Guide Pratique envoyé à chaque participant quelques jours
          avant la course :
        </p>

        <ul className="text-gray-700">
          <li id="securite-casque">
            Porter un casque à coque rigide, avec la jugulaire correctement
            fermée.
          </li>
          <li id="securite-echauffement">Être échauffé.</li>
          <li id="securite-tenue">
            Avoir une tenue adéquate, portée correctement, pour la pratique de
            la course à pied et du vélo.
          </li>
          <li id="securite-maitrise-velo">Rester maître de son vélo.</li>
          <li id="securite-verification-velo">
            Vérifier l’état et le bon fonctionnement de son vélo, notamment
            veiller au bon fonctionnement des freins et à l’état des pneus.
          </li>
        </ul>

        <p className="text-gray-700">
          Tous les participants devront assister au briefing obligatoire et se
          conformer strictement aux consignes de course.
        </p>
        <p className="text-gray-700">
          La direction de course et les contrôleurs se réservent le droit
          d’éliminer toute équipe ne respectant pas le règlement, notamment dans
          les cas suivants :
        </p>

        <ul className="text-gray-700">
          <li id="elimination-casque">
            Absence de port du casque ou casque non attaché.
          </li>
          <li id="elimination-danger">
            Mise en danger d’autrui ou de soi-même.
          </li>
          <li id="elimination-parcours">Non-respect du parcours.</li>
          <li id="elimination-assistance">
            Recours à une assistance extérieure autre que médicale.
          </li>
          <li id="elimination-relais">
            Non-respect des règles concernant le relais à la selle.
          </li>
        </ul>

        <p className="text-gray-700">
          En cas de croisement ou d'emprunt de routes dites « publiques »
          (autres que les chemins de terre ou voies privées), le respect du code
          de la route sera impératif.
        </p>
        <p className="text-gray-700">
          L’assistance médicale sera assurée par une équipe de la sécurité
          civile.
        </p>
        <p className="text-gray-700">
          Le parcours sera balisé, et des signaleurs bénévoles ainsi que la
          police municipale seront présents pour assurer la sécurité du
          parcours.
        </p>
        <p className="text-gray-700 font-bold">Important :</p>
        <p className="text-gray-700">
          Une consigne sera mise à disposition des participants pour le dépôt de
          leurs effets personnels. Nous vous recommandons de ne pas y laisser
          d’objets de valeur.
        </p>
        <p className="text-gray-700">
          L’organisation décline toute responsabilité en cas de perte, de vol ou
          de dégradation des biens déposés.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 11 - Droit à l’image
        </h2>
        <p className="text-gray-700">
          Les participants autorisent, à titre gratuit, à l’organisateur à
          enregistrer à tout moment, leur image et leur voix pendant toute la
          période de la manifestation, et à exploiter ces enregistrements à la
          convenance de l’organisateur et de ses partenaires. Si un participant
          décide de ne pas donner son consentement, il doit le signaler à
          makessa.kone@telecom-sudparis.eu au minimum une semaine avant la
          course. Un album photo de l'événement sera transmis après l'événement
          aux participants n’ayant pas renoncé au consentement de leur droit à
          l’image.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 12 - Parcours</h2>
        <p className="text-gray-700">
          Le départ et l’arrivée du parcours se font sur le campus de Télécom
          SudParis et de l’Institut Mines Télécom Business School. Le parcours
          se fera sur les communes de Evry-Courcouronnes et Soisy-Sur-Seine. Le
          parcours “Découverte” mesure 7 km et consiste en un aller-retour entre
          le campus et les bords de seine. Il comporte une côte sur
          l’avant-dernier kilomètre. Le parcours “Avancé” mesure 15 km et
          traverse la Seine pour aller faire une boucle dans la forêt de Sénart.
          Il comporte 2 côtes : une première avant l’entrée de la forêt de
          Sénart et une deuxième sur l’avant-dernier kilomètre. Les 2 parcours
          seront balisés et des signaleurs seront présents. Le passage sur la
          passerelle du barrage au-dessus de la Seine pour le parcours long doit
          être franchi en courant, les cyclistes doivent descendre de selle. Les
          parcours peuvent être modifiés à la décision de l'organisation de la
          course. Les parcours pourront être retrouvés sur le Guide Pratique et
          seront communiqués dès l’ouverture des inscriptions.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 13 - Abandon et dépassement du délai{" "}
        </h2>
        <p className="text-gray-700">
          En cas d’abandon, l’équipe doit avertir l’organisation de la course et
          remettre le dossard à un des organisateurs. Le temps limite pour
          compléter le circuit choisi est fixé à 2h30 après le départ de la
          course soit 16h30. Tout concurrent dépassant ce temps sera éliminé. Un
          serre-file sera présent pour fermer la course.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 14 - Matériel</h2>
        <p className="text-gray-700">
          Chaque équipe doit disposer d’un vélo pour participer.
        </p>
        <p className="text-gray-700">
          L’organisation peut prêter des vélos pour les équipes le nécessitant,
          à condition que l’équipe le précise à l’organisation lors de son
          inscription.
        </p>
        <p className="text-gray-700">
          Chaque concurrent doit porter en permanence un casque avec la
          jugulaire attachée, y compris lorsque celui-ci court. De même, des
          casques peuvent être prêtés si l’équipe le demande lors de
          l’inscription.
        </p>

        <p className="text-gray-700">
          Les vélos utilisés doivent respecter les conditions suivantes :
        </p>

        <ul className="text-gray-700">
          <li id="velo-taille">Taille : De 26 à 29 pouces</li>
          <li id="velo-mecanique">
            Vélo mécanique uniquement (vélo électrique interdit)
          </li>
          <li id="velo-type">
            Vélo de type VTT (les VTC ou autres sont interdits)
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 15 - Respect de l’environnement et du parcours
        </h2>
        <p className="text-gray-700">
          Les courses étant organisées sur des espaces naturels et urbains, le
          respect de l’environnement est une priorité absolue. Les participants
          sont tenus de respecter les consignes suivantes :
        </p>

        <ul className="text-gray-700">
          <li id="respect-environnement">
            <strong>Préservation de l’environnement</strong>
          </li>
          <ul>
            <li id="environnement-dechets">
              Ne pas jeter de déchets, emballages ou équipements sur le
              parcours. Des zones de ravitaillement et de collecte des déchets
              seront spécifiquement aménagées à cet effet.
            </li>
            <li id="environnement-faune-flore">
              Éviter toute atteinte à la faune et à la flore locales.
            </li>
            <li id="environnement-zones-protegees">
              Le passage sur les zones protégées, y compris les forêts gérées
              par l’ONF (Office National des Forêts) et les cours d’eau sous la
              responsabilité de la VNF (Voies Navigables de France), doit se
              faire dans le respect strict des règles indiquées par
              l’organisation.
            </li>
            <li id="environnement-signalement">
              Les équipes constatant des déchets ou anomalies environnementales
              sur le parcours sont encouragées à le signaler à l’organisation.
            </li>
          </ul>

          <li id="respect-parcours">
            <strong>Suivi du parcours balisé</strong>
          </li>
          <ul>
            <li id="parcours-suivi">
              Les participants doivent suivre exclusivement le parcours balisé
              par l’organisation. Toute sortie du tracé peut entraîner des
              pénalités ou l’élimination.
            </li>
            <li id="parcours-passages-specifiques">
              Les passages spécifiques, tels que la traversée de la passerelle
              au-dessus de la Seine, doivent être empruntés conformément aux
              consignes données (descente de selle obligatoire pour les
              cyclistes).
            </li>
            <li id="parcours-sanctions">
              Le non-respect de ces consignes entraînera des pénalités, pouvant
              aller jusqu’à l’exclusion de la compétition pour l’équipe fautive.
            </li>
          </ul>
        </ul>

        <p className="text-gray-700">
          Par leur inscription, les participants s’engagent à adopter un
          comportement écoresponsable tout au long de l’événement.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 16 - Concours Pom Pom
        </h2>
        <p className="text-gray-700">
          Le concours Pom Pom girls est une épreuve artistique et sportive
          visant à encourager l'esprit d'équipe, la créativité et la
          performance. Il est ouvert à toutes les équipes souhaitant y
          participer, dans le respect des consignes ci-dessous :
        </p>

        <ul className="text-gray-700">
          <li id="inscription-pompom">
            <strong>Inscription</strong>
          </li>
          <ul>
            <li id="inscription-email">
              Les équipes souhaitant participer doivent s'inscrire par e-mail à
              l'adresse suivante :
              <a href="mailto:makessa.kone@telecom-sudparis.eu">
                makessa.kone@telecom-sudparis.eu
              </a>
              .
            </li>
            <li id="inscription-details">
              Chaque équipe doit indiquer son nom, le nombre de participants
              (minimum 4 personnes), et transmettre la musique choisie pour la
              performance sous format MP3 ou WAV au plus tard le 5 avril 2025.
            </li>
          </ul>

          <li id="criteres-performance">
            <strong>Critères de performance</strong>
          </li>
          <ul>
            <li id="performance-duree">
              Les performances devront durer entre 2 et 5 minutes.
            </li>
            <li id="performance-chorégraphie">
              Créativité de la chorégraphie.
            </li>
            <li id="performance-synchronisation">
              Synchronisation et exécution technique.
            </li>
            <li id="performance-costumes">
              Originalité des costumes et accessoires.
            </li>
            <li id="performance-public">Interaction avec le public.</li>
            <li id="performance-duree-respect">Respect de la durée imposée.</li>
          </ul>

          <li id="deroulement-concours">
            <strong>Déroulement du concours</strong>
          </li>
          <ul>
            <li id="deroulement-date">
              Le concours se déroulera sur le campus de Télécom SudParis le 10
              avril 2025 juste après que le dernier binôme de la course soit
              arrivé.
            </li>
            <li id="deroulement-jury">
              Les équipes effectueront leur prestation devant un jury.
            </li>
            <li id="deroulement-classement">
              Le classement final sera annoncé lors de la remise des prix en fin
              de journée.
            </li>
          </ul>

          <li id="recompenses">
            <strong>Récompenses</strong>
          </li>
          <ul>
            <li id="recompenses-equipes">
              Les trois premières équipes seront récompensées avec des bons
              d’achat dont les montants seront communiqués lors de l’ouverture
              des inscriptions.
            </li>
          </ul>

          <li id="details-supplementaires">
            <strong>Détails supplémentaires</strong>
          </li>
          <ul>
            <li id="details-contact">
              Se rapprocher de <span></span>
              <a href="mailto:makessa.kone@telecom-sudparis.eu">
                makessa.kone@telecom-sudparis.eu
              </a>{" "}
              pour plus de détails sur le concours et les conditions.
            </li>
          </ul>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 18 - Concours mascottes
        </h2>
        <p className="text-gray-700">
          Le concours de mascottes est un défi amusant et convivial qui met à
          l’honneur l’originalité et l’enthousiasme des participants.
        </p>

        <ul className="text-gray-700">
          <li id="inscription-mascotte">
            <strong>Inscription</strong>
          </li>
          <ul>
            <li id="inscription-email-mascotte">
              Les inscriptions doivent être réalisées par e-mail à l’adresse
              suivante :
              <a href="mailto:makessa.kone@telecom-sudparis.eu">
                makessa.kone@telecom-sudparis.eu
              </a>
              .
            </li>
            <li id="inscription-details-mascotte">
              Les participants doivent indiquer leur nom et la description de
              leur mascotte au plus tard le 5 avril 2025.
            </li>
          </ul>

          <li id="criteres-evaluation-mascotte">
            <strong>Critères d’évaluation</strong>
          </li>
          <ul>
            <li id="mascotte-originalite">Originalité du costume.</li>
            <li id="mascotte-engagement">
              Engagement et interaction avec le public.
            </li>
            <li id="mascotte-prestation">
              Prestation scénique (danse, mime, sketch ou toute autre
              animation).
            </li>
          </ul>

          <li id="deroulement-concours-mascotte">
            <strong>Déroulement du concours</strong>
          </li>
          <ul>
            <li id="deroulement-date-mascotte">
              Le concours se tiendra le 10 avril 2025 sur le campus de Télécom
              SudParis.
            </li>
            <li id="deroulement-parcours-mascotte">
              Chaque mascotte devra effectuer un parcours d’obstacle à vélo et à
              pied chronométré sur le campus.
            </li>
            <li id="deroulement-spectacle-mascotte">
              L’objectif principal est de divertir et de captiver les
              spectateurs, notamment au départ et à l’arrivée.
            </li>
          </ul>

          <li id="recompenses-mascotte">
            <strong>Récompenses</strong>
          </li>
          <ul>
            <li id="recompense-bon-achat-mascotte">
              Le prix, sous forme de bon d’achat, sera remis à la mascotte ayant
              obtenu la meilleure note du jury (le même que celui du concours
              pompom girls).
            </li>
            <li id="recompense-montant-mascotte">
              Le montant sera communiqué lors de l’ouverture des inscriptions.
            </li>
          </ul>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Article 19 - Acceptation du règlement
        </h2>
        <p className="text-gray-700">
          L’inscription d’un concurrent implique l’acceptation du présent
          règlement. Pour toute question supplémentaire, contactez Evan COCAIN
          evan.cocain@telecom-sudparis.eu ou au +33 7 82 82 16 90.
        </p>
      </div>
    </div>
  );
}
