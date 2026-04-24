/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LoginPage } from "../components/LoginPage";
import { motion, AnimatePresence } from "motion/react";

export default function Login() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key="login"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <LoginPage />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
