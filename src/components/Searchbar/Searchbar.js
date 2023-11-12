import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader className="searchbar">
      <SearchForm className="form" onSubmit={e => onSubmit(e)}>
        <SearchFormButton type="submit" className="button">
          <SearchFormButtonSpan className="button-label">
            Search
          </SearchFormButtonSpan>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
