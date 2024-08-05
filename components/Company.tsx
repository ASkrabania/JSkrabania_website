"use client";
import Image from 'next/image';
import styles from '@/styles/Company.module.css'
import biuro from '@/public/Biuro Inżynierskie Jerzy Skrabania.svg';
import obraz from '@/public/obraz.jpg'
import React from 'react';
import {motion} from "framer-motion";
import Link from 'next/link';
import {BsArrowUpRight} from "react-icons/bs";


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
        <div className={styles.grid1}>
            <span className={styles.text1}>Usługi inżynierskie w zakresie automatyki przemysłowej</span>
            <span className={styles.text2}>Z naszych  usług korzystają największe koncerny w Polsce</span>
            <div>
              <Link href="#kontakt" className={styles.kontakt2}
              >Kontakt <BsArrowUpRight />
              </Link>
            </div>
            <div className={styles.obraz}>
              <Image
                src={obraz}
                alt='Biuro'
                quality="95"
                priority= {true}
              />
            </div>
        </div>
    </section>
  )
}
