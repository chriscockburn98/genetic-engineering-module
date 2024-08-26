# Genetic Engineering Module

## Overview

The Genetic Engineering Module is a JavaScript library designed to simulate genetic traits and inheritance for various applications, such as breeding simulations and educational tools. It provides a framework to represent and manipulate alleles, genes, and genomes, encapsulating the core principles of genetics.

## Installation

Install the module via npm:
`yarn genetic-engineering-module`

## Concepts

### Allele

An **Allele** represents a variant form of a gene. Each allele has:

- An identifier: A unique string to distinguish it.
- A DNA sequence: A string representing the nucleotide sequence.
- A trait value: The phenotypic trait that the allele codes for.
- A dominance factor: A numerical value indicating the dominance level of the allele.

### Gene

A **Gene** is a sequence of DNA that determines a specific trait. Each gene comprises:

- An identifier: A unique string to identify the gene.
- A collection of alleles: Different versions of the gene that determine variations in the trait.

### Genome

A **Genome** represents the complete set of genes for an organism. It includes:

- A collection of genes: Each gene mapped to its identifier.

### Trait Determination

Traits are determined based on the combination of alleles present in a gene. The module supports:

- Dominance: Where one allele masks the expression of another.

## Usage

To use the Genetic Engineering Module, import the relevant classes and create instances of alleles, genes, and genomes. Use the provided utilities to simulate genetic inheritance and derive traits.

## License

This project is licensed under the MIT License.
