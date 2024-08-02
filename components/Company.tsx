"use client";
import Image from 'next/image';
import styles from '@/styles/Company.module.css'
import biuro from '@/public/Biuro Inżynierskie Jerzy Skrabania.svg';
import React from 'react';
import {motion} from "framer-motion";

export default function Company() {
  return (
    <section>
        <div className={styles.biuro_zew}>
            <motion.div>
                <Image 
                className={styles}
                src={biuro}
                alt='Jerzy Skrabania'
                quality="95"
                priority={true}
                />
            </motion.div>
        </div>
        <div className={styles}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}
