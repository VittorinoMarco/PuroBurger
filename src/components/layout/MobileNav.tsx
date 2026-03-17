"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white min-w-[44px] min-h-[44px]"
            aria-label="Chiudi menu"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-white text-3xl font-medium hover:text-puro-green transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div variants={itemVariants}>
            <Button href={`tel:${CONTACT.phone}`} variant="primary" size="lg">
              Ordina al Tavolo
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
