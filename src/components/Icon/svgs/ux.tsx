const uxIcon = () => (
  <>
    <image
      xlinkHref="data:image/png;base64,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&#10;"
    />
  </>
);

export default uxIcon;
