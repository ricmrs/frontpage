const mysqlIcon = () => (
  <>
    <image
      xlinkHref="data:image/png;base64,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&#10;z/Ecz2Eu/guvIsvM82QphQAAAABJRU5ErkJggg==&#10;"
    />
  </>
);

export default mysqlIcon;
