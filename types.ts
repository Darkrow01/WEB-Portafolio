import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  behanceUrl: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface Tool {
  name: string;
  icon?: React.ReactNode;
}