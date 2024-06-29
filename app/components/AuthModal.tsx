'use client'
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Modal from "./Modal"
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Modal title='Welcome Back 👋' description='Login to your account' isOpen={isOpen} onChange={onChange}>
            <Auth theme="dark" providers={["google", "facebook"]} supabaseClient={supabaseClient} magicLink
            appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand: '#404040',
                            brandAccent: '#22c55e'
                        }
                    }
                }
            }} />
        </Modal>
    )
}

export default AuthModal;