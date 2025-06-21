"use client";

import {
  FaWarehouse,
  FaTruckMoving,
  FaShieldAlt,
  FaBoxes,
  FaHandHolding,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    title: "Depolama Hizmeti",
    description:
      "Eşyalarınızı güvenli, temiz ve ilaçlanmış alanlarda koruma altına alıyoruz.",
    icon: <FaWarehouse className="text-4xl text-primary" />,
  },
  {
    title: "Taşıma Hizmeti",
    description:
      "İsteğe bağlı olarak taşıma desteği sunuyor, eşyalarınızı en doğru şekilde transfer ediyoruz.",
    icon: <FaTruckMoving className="text-4xl text-primary" />,
  },
  {
    title: "Sigorta",
    description:
      "Depolanan tüm ürünleriniz için güvence sunar, içinizin rahat olmasını sağlarız.",
    icon: <FaShieldAlt className="text-4xl text-primary" />,
  },
  {
    title: "7/24 Resepsiyon",
    description:
      "İletişime açık profesyonel ekip ile günün her saati yanınızdayız.",
    icon: <FaPhoneAlt className="text-4xl text-primary" />,
  },
  {
    title: "Kişisel Depolama",
    description:
      "Size özel odalarda saklama imkânı ile maksimum güvenlik ve mahremiyet.",
    icon: <FaBoxes className="text-4xl text-primary" />,
  },
  {
    title: "Karşılama ve Destek",
    description:
      "Eşyalarınızı teslim alıyor ve sürecin her adımında yanınızda oluyoruz.",
    icon: <FaHandHolding className="text-4xl text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-20 pb-32 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title font-extrabold tracking-tight text-gray-900 md:text-5xl font-montserrat">
          Hizmetlerimiz
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          DepoNext olarak size özel çözümlerle hayatınızı kolaylaştırıyoruz.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left border border-gray-200">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-montserrat">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
