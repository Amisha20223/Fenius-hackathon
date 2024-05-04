import {Header} from "./header";
import {Footer} from "./footer";
import { Body } from "./body";
type Props ={
    childeren: React.ReactNode;
};
const MarketingLayout = ({ childeren}: Props) => { 
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="min-h-screen flex flex-col items-center justify-center">
                {childeren}
               <Body>
                
               </Body>
                </main>
                
                <Footer/>
           
        </div>
    );
};
export default MarketingLayout; 