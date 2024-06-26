import Image from "next/image";
import { Loader} from "lucide-react";
import { ClerkLoaded,ClerkLoading,SignedIn,SignedOut,SignInButton,
    UserButton
 } from "@clerk/nextjs";
 import {Button} from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 bg-orange-400 border-orange-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-orange-500">
            
            
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                <Image src="/robot.png" height={50} width={50} alt="robot" />
                <h1 className="text-2xl font-extrabold
                text-black-600 tracking-wide">
                    FENIUS
                </h1>
                </div>
           
            <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground
                animate-spin"></Loader>
            </ClerkLoading>
            <ClerkLoaded>
             <SignedIn>
                <UserButton/>
             </SignedIn>
             <SignedOut>
                <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
                    
                    >
                        <Button >
                            Login
                        </Button>
                </SignInButton>
             </SignedOut>
            </ClerkLoaded>
            </div>

        </header>
    );
};
