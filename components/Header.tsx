"use client";
import React from 'react'
import styles from "../styles/Header.module.css";
import {motion} from "framer-motion";
import { links } from '@/lib/data';
import { link } from 'fs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className= {styles.m_header}>
        <motion.div className= {styles.header}
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 0.4}}
          >
        </motion.div>
        <nav className={styles.links}>
          <ul  className= {styles.ul}>
            {
            links.map(link => (
              <motion.li 
                className={styles.li} 
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                >
                <Link className={styles.link} href={link.hash}>
                {link.name}
                </Link>
              </motion.li>
            ))
            }
          </ul>
        </nav>
    </header>
  )
};



