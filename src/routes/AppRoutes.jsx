import { Routes, Route} from "react-router-dom";
import Accueil from "../pages/Accueil";
import APropos from "../pages/APropos";
import Contact from "../pages/Contact";
import MesRealisations from "../pages/MesRealisations";
import MentionsLegales from "../pages/MentionsLegales";
import NotFound from "../pages/NotFound";

function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/realisations" element={<MesRealisations />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRoutes;