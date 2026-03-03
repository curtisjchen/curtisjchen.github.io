---
layout: post
title: "Attention Is All You Need"
date: 2026-02-28
tags: [papers]
authors: Vaswani et al., 2017
description: The paper that introduced the Transformer architecture, replacing RNNs with self-attention.
---

{% include image.html 
   url="/assets/img/posts/transformers.webp" 
   description="Transformer Architecture" 
   caption="Full Transformer." 
   height="50vh" %}

## Summary

The paper introduces the transformer architecture as a solution for machine translation problems, e.g converting english to german and so on. The paper is named "Attention is All You Need" because recurrent neural networks, which had been the popular architecture for sequence to sequence tasks, introduced the idea of attention to bypass propagating signals by having hidden states attend to other hidden states through a residual connection. Recurrent networks were hard to train due to their sequential nature, which meant it was difficult to parallelize, and vanishing and exploding gradients as the network got deeper. 

The paper introduces a transformer encoder and a transformer decoder. The transformer encoder operates on the original sequence and produces contextualized embeddings, and the transformer decoder outputs the next token autoregressively in the target language. The encoder has full-context self-attention. The decoder has causal self-attention and cross attention from the encoder. 

## Key Ideas

- Tokenize sequence
- Convert tokens to word embeddings
- Add positional encoding
- Linearly project embeddings into query, key, and value space.
- Compute attention weights using dot product of query and key multiplied by value.
- Add to original word embedding (residual connection).
- LayerNorm
- MLP that expands to 4x model size then back to 1x model size.
- Add to original word embedding (residual connection).
- LayerNorm
- Repeat N times. 
- Goes through language modelling head to classify the probability of the next token.
- Sample next token from this probability distribution.

Simplified ideas of encoder and decoder, they operate similarly but slightly different.

- Removes recurrency of LSTMs
- Efficient matrix operations makes it scalable even though attention is $O(N^2)$

## My Thoughts

I like how it is relatively simple. It does not seem like an overengineered architecture where there are unnecessary or overcomplex components. Everything serves a purpose.

## Links

- [Paper](https://arxiv.org/abs/1706.03762)
