import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
    return (
        <footer className="w-full text-center py-4">
            <p className="text-slate-300 text-xs">
                &copy; {new Date().getFullYear()} Strider. All rights reserved.
            </p>
        </footer>
    );
}
